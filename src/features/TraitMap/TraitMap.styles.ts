import styled from "styled-components";

/**
 * Wraps the component.
 */
export const Wrapper = styled.div`
  padding: 2rem;
  overflow-x: auto;
`;

/**
 * The page's title.
 */
export const Title = styled.h2`
  font-weight: normal;
  margin: 0;
`;

/**
 * Wraps the map of traits.
 */
export const TraitMapWrapper = styled.div`
  padding: 1rem 0;
`;

/**
 * Wraps the columns.
 */
export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TraitColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

/**
 * Wraps the Trait component.
 */
export const TraitWrapper = styled.div`
  padding: 1rem;
`;

/**
 * Wraps a trait.
 */
export const Trait = styled.div`
  padding: 0.5rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #e5e5ec;
  border-radius: 8px;
  transition: 0.3s ease;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
  color: inherit;
  text-decoration: none;
  position: relative;

  &:hover {
    cursor: pointer;

    &:after {
      opacity: 1;
    }
  }

  &:after {
    z-index: 1;
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #eeeeee;
    border-radius: 10px;
    content: "+";
    background: #ffffff;
    position: absolute;
    bottom: -8px;
    left: calc(50% - 8px);
    transition: 0.3s ease;
    opacity: 0;
  }
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
