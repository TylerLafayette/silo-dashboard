import styled, {keyframes} from "styled-components";

/**
 * Wraps the component.
 */
export const Wrapper = styled.div`
  position: relative;
`;

/**
 * Wraps the actual input (Tags, TagInput).
 */
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

/**
 * Where the user types in tag names.
 */
export const TagInput = styled.input`
  border: 0;
  outline: none;
  background: transparent;
`;

/**
 * Tag in animation.
 */
export const TagIn = keyframes`
0% {
  opacity: 0;
  transform: translateY(8px);
}
100% {
  opacity: 1;
  transform: translateY(0px);
}
`;

/**
 * Displays a single tag.
 */
export const Tag = styled.span`
  padding: 0.2rem 0.4rem;
  font-size: 0.75rem;
  margin-right: 4px;

  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 4px;

  animation: ${TagIn} 250ms cubic-bezier(0, 1, 0.5, 1);
`;

const SuggestionsIn = keyframes`
0% {
  transform: translateY(16px);
  opacity: 0;
}
100% {
  transform: translateY(0px);
  opacity: 1;
}
`;

export const SuggestionsWrapper = styled.div`
  z-index: 1;
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 0.8rem;
  background: #ffffff;
  border-radius: 0.25rem;
  border: 1px solid #eeeeee;
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0;
  max-height: 300px;
  animation: ${SuggestionsIn} 250ms cubic-bezier(0, 1, 0.5, 1);
`;

/**
 * Props for the Suggestion component.
 */
export interface ISuggestionProps {
  selected?: boolean;
}

/**
 * A single suggestion.
 */
export const Suggestion = styled.a<ISuggestionProps>`
  text-decoration: none;
  color: inherit;
  padding: 0.5rem 1rem;
  min-width: 200px;
  transition: 250ms ease;

  &:hover {
    background-color: #eeeeee;
    cursor: pointer;
  }

  ${({selected = false}) => selected ? `
    background-color: #eeeeee;
    ` : null}
`;
