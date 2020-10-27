import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
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
  }, [url, query]);
  return (
    <div>
      {error ? <h1>{error}</h1> : ""}

      <h1>Github User Searcher</h1>
      <input
        type="text"
        className="search"
        placeholder="Enter username"
        onChange={e => {
          setQuery(e.target.value);
        }}
      />
      {isLoading && <div>loading ...</div>}
      {query !== "" && users.length > 0 ? (
        <ul>
          {users.map(user => {
            return (
              <div key={user.id}>
                <img
                  src={user.avatar_url}
                  alt="user avatar"
                  id="search-user-image"
                />

                <Link to={`/user/${user.id}`} id="search-user-name">
                  {user.login}
                </Link>
              </div>
            );
          })}
        </ul>
      ) : (
        <div className="text">No users</div>
      )}
      <img
        src="https://github.githubassets.com/images/modules/open_graph/github-octocat.png"
        alt="github-icon"
        id="github-icon"
      />
      <footer>Coded by : Nouha Najah</footer>
    </div>
  );
};
export default Home;
