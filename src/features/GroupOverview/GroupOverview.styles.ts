import styled from "styled-components";

/**
 * Wraps the component.
 */
export const Wrapper = styled.div`
  padding: 2rem;
`;

/**
 * The group's title.
 */
export const Title = styled.h2`
  font-weight: normal;
  margin: 0;
`;

/**
 * Wraps the table of subjects.
 */
export const SubjectsWrapper = styled.div`
  padding: 2rem 0;
`;

/**
 * Row displaying a single subject.
 */
export const SubjectRow = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem;
  border-radius: 0.5rem;

  &:nth-child(even) {
    background-color: rgb(242, 242, 245);
  }
`;

/**
 * The subject's name.
 */
export const SubjectName = styled.span`
  min-width: 200px;
`;

export const SubjectTrait = styled.span`
  padding: 0.2rem 0.4rem;
  font-size: 0.75rem;
  margin-right: 4px;

  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 4px;
`;

export const MatrixURL = styled.pre`
  font-family: monospace;
  padding: 0.5rem 0.75rem;
  background-color: #e5e5ec;
  border-radius: 8px;
  margin: 0.5rem 0;
`;

/**
 * A row flex item.
 */
export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

/**
 * A padded box.
 */
export const Box = styled.div`
  padding: 0rem 0.5rem;
`;

/**
 * Standard button.
 */
export const Button = styled.button`
  border: 0;
  outline: 0;
  padding: 0.5rem 1rem;
  background-color: rgb(242, 242, 245);
  border-radius: 0.5rem;
  transition: 200ms ease;

  &:hover {
    cursor: pointer;
    background-color: rgb(230, 230, 230);
  }
`;
