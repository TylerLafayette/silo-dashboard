import React, { useEffect, useState } from "react";
import GroupsGrid from "../../components/GroupsGrid";

/**
 * The homepage showing an overview of the groups.
 */
const Home = () => {
  const [groups, setGroups] = useState([]);

  const fetchGroups = async () => {
    const request = await fetch("http://localhost:3030/api/v1/groups");
    const json = await request.json();
    setGroups(json.groups);
  };

  useEffect(() => {
    fetchGroups();
  }, []);

  return (
    <>
      <GroupsGrid groups={groups} />
    </>
  );
};

export default Home;
