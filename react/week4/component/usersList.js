import React, { useContext } from "react";
import { UserContext } from "../userContex";

const UsersList = () => {
  const { users, query } = useContext(UserContext);
  let itemsToRender;

  if (query !== "" && users.length > 0) {
    itemsToRender = users.map(user => {
      return (
        <div key={user.id}>
          <button> {user.login}</button>
          <img alt="avatar" style={{ width: "70px" }} src={user.avatar_url} />
        </div>
      );
    });
  } else {
    itemsToRender = "No users";
  }
  return <div>{itemsToRender}</div>;
};
export default UsersList;
