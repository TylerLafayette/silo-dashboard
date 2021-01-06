import styled from "styled-components";

/**
 * Wraps the navbar with a bottom border.
 */
export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 0.5rem;
  padding-top: 1rem;
  border-bottom: 1px solid #e5e5ec;
`;

/**
 * Shows the Silo title.
 */
export const Title = styled.span`
  font-weight: bold;
`;
