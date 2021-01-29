import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  MatrixURL,
  SubjectName,
  SubjectRow,
  SubjectsWrapper,
  SubjectTrait,
  Title,
  Wrapper,
} from "./GroupOverview.styles";

/**
 * Displays an overview page of a single group.
 */
const GroupOverview = () => {
  const { id } = useParams<{ id: string | undefined }>();

  const [subjects, setSubjects] = useState<
    {
      id: number | undefined;
      traits: {
        id: string | undefined;
        traitName: string | undefined;
      }[];
    }[]
  >([]);

  const fetchGroupSubjects = async (id: string | undefined) => {
    const request = await fetch(`/api/v1/groups/${id}/subjects`);
    const json = await request.json();
    let subjects = json.subjects;
    for (let i = 0; i < subjects.length; i++) {
      const traitsReq = await fetch(
        `/api/v1/groups/${id}/subjects/${subjects[i].id}/traits`
      );
      const json = await traitsReq.json();
      const traits = json.traits;
      subjects[i].traits = traits;
    }
    setSubjects(subjects);
  };

  useEffect(() => {
    fetchGroupSubjects(id);
  }, []);

  return (
    <Wrapper>
      <Title>Group {id}</Title>
      <MatrixURL>
        /api/v1/groups/{id}
        /generate/matrix?traits=cough,wet_cough&attributes=age,length_of_stay&fields=true
      </MatrixURL>
      <SubjectsWrapper>
        {subjects.map((subject) => (
          <SubjectRow>
            <SubjectName>Subject {subject.id}</SubjectName>
            {subject.traits.map((item) => (
              <SubjectTrait>{item.traitName}</SubjectTrait>
            ))}
          </SubjectRow>
        ))}
      </SubjectsWrapper>
    </Wrapper>
  );
};

export default GroupOverview;
