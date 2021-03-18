import React, { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { useHistory, useParams } from "react-router-dom";
import {
  Box,
  Button,
  MatrixURL,
  Row,
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
  const history = useHistory();
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

  const deleteGroup = async (id: string | undefined) => {
    const request = await fetch(`/api/v1/groups/${id}`, {
      method: "DELETE",
    });

    const json = await request.json();
    history.push("/");
  };

  useEffect(() => {
    fetchGroupSubjects(id);
  }, []);

  return (
    <Wrapper>
      <Row>
        <Title>Group {id}</Title>
        <Box>
          <Button onClick={(e) => deleteGroup(id)}>
            <AiFillDelete />
          </Button>
        </Box>
      </Row>
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
