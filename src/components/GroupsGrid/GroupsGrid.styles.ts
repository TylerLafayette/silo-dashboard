import styled from "styled-components";

/**
 * Wraps the grid of groups.
 */
export const GridWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 2rem;
`;

/**
 * Wraps an item in the grid.
 */
export const GridItem = styled.div`
  padding: 1rem;
`;

/**
 * Wraps a group.
 */
export const GroupWrapper = styled.div`
  min-width: 160px;
  min-height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #e5e5ec;
  border-radius: 8px;
  transition: 0.3s ease;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
  color: inherit;
  text-decoration: none;

  &:hover {
    transform: translateY(-5px);
    cursor: pointer;
  }
`;

/**
 * Title for a group.
 */
export const GroupTitle = styled.h3`
  margin: 0;
`;
