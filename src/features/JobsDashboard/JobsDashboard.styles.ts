import styled from "styled-components";

/**
 * Wraps the entire component.
 */
export const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: row;
`;

export const Sidebar = styled.div`
  background-color: #eeeeee;
  min-width: 260px;
  padding: 0rem 1rem;
  min-height: 100%;
`;

/**
 * Wraps a single job.
 */
export const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
  background-color: #ffffff;
`;

export enum JobStatus {
  INACTIVE,
  ACTIVE,
  ERROR,
}

export interface SidebarJobProps {
  status?: JobStatus;
}

export const SidebarJobWrapper = styled.div<SidebarJobProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #ffffff;
  margin: 1rem 0;
  border-radius: 8px;
  font-weight: bold;
  padding: 1rem;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.06);
  transition: 200ms ease;
  &:hover {
    cursor: pointer;
    box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.1);
  }
`;

export const SidebarJobStatus = styled.div<SidebarJobProps>`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: red;
  margin-right: 1rem;
  ${({ status }) =>
    status == JobStatus.INACTIVE ? `background-color: #c3c3c3;` : null}
  ${({ status }) =>
    status == JobStatus.ERROR ? `background-color: red;` : null}
  ${({
    status,
  }) => (status == JobStatus.ACTIVE ? `background-color: #2cda6a;` : null)}
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
`;

export const JobTitle = styled.h1`
  margin: 0;
  padding: 0;
`;

export const Tag = styled.span`
  margin: 0rem 1rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.75px;
  background-color: #eeeeee;
  border-radius: 4px;
  font-size: 0.5rem;
  padding: 0.25rem 0.5rem;
`;

export const SpreadRow = styled.div`
  display: flex;
  justify-content: space-between;
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

export const Section = styled.div`
  padding: 1rem 0;
`;

export const SectionTitle = styled.h4`
  margin: 0;
  padding: 0;
  font-weight: normal;
`;

export const CodeEditor = styled.textarea`
  font-family: monospace;
  border: 1px solid #eeeeee;
  border-radius: 8px;
  outline: 0;
  width: 100%;
  resize: none;
  min-height: 500px;
  line-height: 1.5;
  padding: 1rem;
`;

export const Details = styled.div`
  padding-top: 2rem;
`;
