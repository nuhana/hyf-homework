import React, { useEffect, useContext } from "react";
import UsersList from "./usersList";
import { UserContext } from "../userContex";

export const UsersInput = () => {
  const {
    setUsers,
    query,
    setQuery,
    isLoading,
    setIsLoading,
    error,
    setError,
  } = useContext(UserContext);

  const url = `https://api.github.com/search/users?q=${query}`;
  useEffect(() => {
    if (query === "") {
      return;
    }
    setIsLoading(true);
    fetch(url)
      .then(res => res.json())
      .then(data => {
        if (data.message) {
          setError(data.message);
        } else {
          setUsers(data.items);
          setError(null);
        }
        setIsLoading(false);
      });
  }, [url, setIsLoading, setUsers, query, setError]);

  return (
    <div>
      {error ? <h1>{error}</h1> : ""}
      <input
        type="text"
        onChange={e => {
          setQuery(e.target.value);
        }}
      ></input>

      {isLoading && <div>loading ...</div>}
      <UsersList />
    </div>
  );
};
