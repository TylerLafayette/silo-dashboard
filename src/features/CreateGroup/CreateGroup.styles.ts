import styled, { keyframes } from "styled-components";

/**
 * Props for the Wrapper component.
 */
export interface IWrapperProps {
  disabled?: boolean;
}

/**
 * Wraps the component.
 */
export const Wrapper = styled.div<IWrapperProps>`
  padding: 2rem;
  transition: 0.3s ease;

  ${({ disabled }) =>
    disabled
      ? `
    opacity: 0.5;
    pointer-events: none;
    `
      : ``}
`;

/**
 * The page's title.
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

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

/**
 * Row displaying a single subject.
 */
export const SubjectRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-radius: 0.5rem;
  animation: ${fadeIn} 200ms ease;

  &:nth-child(even) {
    background-color: rgb(242, 242, 245);
  }
`;

/**
 * Wraps the fields for each subject.
 */
export const SubjectFieldsWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

/**
 * Wraps the actions for each subject.
 */
export const SubjectActionsWrapper = styled.div`
  padding-right: 0.5rem;
`;

/**
 * The subject's name.
 */
export const SubjectName = styled.span`
  min-width: 200px;
`;

/**
 * The input box for entering traits.
 */
export const TraitEntry = styled.input`
  background-color: transparent;
  border: 0;
  outline: 0;
`;

/**
 * Wraps the new subject button.
 */
export const NewSubjectWrapper = styled.div`
  padding-bottom: 1rem;
`;

/**
 * A button to remove the subject.
 */
export const RemoveSubjectButton = styled.div`
  color: #8e8c8c;
  transition: 200ms ease;

  &:hover {
    cursor: pointer;
    color: red;
  }
`;

/**
 * Button for creating a new subject.
 */
export const NewSubject = styled.button`
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
