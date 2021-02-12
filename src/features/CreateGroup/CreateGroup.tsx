import React, { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { useHistory } from "react-router";
import TagsInput from "../../components/TagsInput";
import {
  NewSubject,
  NewSubjectWrapper,
  RemoveSubjectButton,
  SubjectActionsWrapper,
  SubjectFieldsWrapper,
  SubjectName,
  SubjectRow,
  SubjectsWrapper,
  Title,
  TraitEntry,
  Wrapper,
} from "./CreateGroup.styles";

/**
 * Represents an assignable trait.
 */
interface ITrait {
  id: number;
  traitName: string;
}

/**
 * Represents a single subject in editing.
 */
interface ISubject {
  id: number;
  traits: ITrait[];
  age?: number;
  lengthOfStay?: number;
}

/**
 * Group creation page.
 */
const CreateGroup = () => {
  const history = useHistory();

  const [subjects, setSubjects] = useState<ISubject[]>([]);

  const [traits, setTraits] = useState([]);

  const [disabled, setDisabled] = useState(false);

  const fetchTraits = async () => {
    const request = await fetch(`/api/v1/traits`);
    const json = await request.json();
    setTraits(json.traits);
  };

  useEffect(() => {
    fetchTraits();
  }, []);

  const nextId = () => subjects[subjects.length - 1]?.id + 1 || 1;

  const newSubject = () => {
    console.log("h");

    setSubjects([
      ...subjects,
      {
        id: nextId(),
        traits: [],
        age: 0,
        lengthOfStay: 0,
      },
    ]);
  };

  const updateAge = (id: number, age: number) => {
    const c = subjects.map((subject) =>
      subject.id == id ? { ...subject, age } : subject
    );
    setSubjects(c);
  };

  const updateLength = (id: number, lengthOfStay: number) => {
    const c = subjects.map((subject) =>
      subject.id == id ? { ...subject, lengthOfStay } : subject
    );
    setSubjects(c);
  };

  const updateTraits = (id: number, tags: { name: string }[]) => {
    const t = tags.map((x) => {
      console.log(x.name);
      const trait: ITrait = traits.filter(
        (i: ITrait) => i.traitName == x.name
      )[0];
      return {
        id: trait.id,
        name: trait.traitName,
      };
    });

    const c = subjects.map((subject) =>
      subject.id == id ? { ...subject, traits: t } : subject
    );
    setSubjects(c as any);
  };

  const saveGroup = async (e: any) => {
    setDisabled(true);

    const req = await fetch(`/api/v1/groups`, {
      method: "POST",
    });

    const group = await req.json();

    for (let i = 0; i < subjects.length; i++) {
      let subject = subjects[i];

      const req = await fetch(`/api/v1/groups/${group.id}/subjects`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          age: subject.age,
          lengthOfStay: subject.lengthOfStay,
        }),
      });

      const subj = await req.json();

      for (let y = 0; y < subject.traits.length; y++) {
        let trait = subject.traits[y];

        console.log(trait, i);

        const req = await fetch(
          `/api/v1/groups/${group.id}/subjects/${subj.id}/traits`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              traitId: (trait as ITrait).id,
            }),
          }
        );
      }
    }

    setDisabled(false);
    history.push("/");
  };

  return (
    <Wrapper disabled={disabled}>
      <Title>Editing New Group</Title>
      <SubjectsWrapper>
        <NewSubjectWrapper>
          <NewSubject onClick={newSubject}>+ Add a subject</NewSubject>
        </NewSubjectWrapper>
        {subjects.map((subject, index) => (
          <SubjectRow key={subject.id}>
            <SubjectFieldsWrapper>
              <SubjectName>Subject {subject.id}</SubjectName>
              <TraitEntry
                onChange={(e) =>
                  updateAge(subject.id, parseInt(e.target.value))
                }
                placeholder={"Age"}
              />
              <TraitEntry
                onChange={(e) =>
                  updateLength(subject.id, parseInt(e.target.value))
                }
                placeholder={"Length of stay"}
              />
              <TagsInput
                onChange={(tags) => updateTraits(subject.id, tags)}
                suggestions={traits.map((x: ITrait) => ({ name: x.traitName }))}
                placeholder={"Trait1, Trait2..."}
              />
            </SubjectFieldsWrapper>
            <SubjectActionsWrapper>
              <RemoveSubjectButton
                onClick={(e) => {
                  console.log(index);
                  setSubjects(subjects.filter((_, i) => i !== index));
                }}
              >
                <AiFillDelete />
              </RemoveSubjectButton>
            </SubjectActionsWrapper>
          </SubjectRow>
        ))}
      </SubjectsWrapper>
      <NewSubject onClick={saveGroup}>Save group</NewSubject>
    </Wrapper>
  );
};

export default CreateGroup;
