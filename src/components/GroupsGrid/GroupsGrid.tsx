import React from "react";
import { Link } from "react-router-dom";
import {
  GridItem,
  GridWrapper,
  GroupTitle,
  GroupWrapper,
} from "./GroupsGrid.styles";

interface IGroup {
  id: number;
}

interface IProps {
  groups: IGroup[];
}

const GroupsGrid = ({ groups }: IProps) => (
  <GridWrapper>
    <Link
      style={{
        color: "inherit",
        textDecoration: "none",
      }}
      to="/groups/create"
    >
      <GridItem>
        <GroupWrapper>
          <GroupTitle>New Group</GroupTitle>
        </GroupWrapper>
      </GridItem>
    </Link>
    {groups.map((item, i) => (
      <Link
        style={{
          color: "inherit",
          textDecoration: "none",
        }}
        to={`/groups/${item.id}`}
      >
        <GridItem key={i}>
          <GroupWrapper>
            <GroupTitle>Group {item.id}</GroupTitle>
          </GroupWrapper>
        </GridItem>
      </Link>
    ))}
  </GridWrapper>
);

export default GroupsGrid;
