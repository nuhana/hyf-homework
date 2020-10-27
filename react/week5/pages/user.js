import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { id } = useParams();
  const [userInfo, setUserInfo] = useState("");

  useEffect(() => {
    fetch(` https://api.github.com/user/${id}`)
      .then(req => req.json())
      .then(result => {
        setUserInfo(result);
      });
  }, [id]);
  return (
    <div className="container">
      <div className="card">
        <div className="imgBx">
          <img
            src={userInfo.avatar_url}
            alt="user-avatar"
            className="user-avatar"
          />
        </div>
        <ul id="content">
          <h1>{userInfo.name}</h1>
          <li>Followers : {userInfo.followers}</li>
          <li> Following : {userInfo.following}</li>
          <li> Repos: {userInfo.public_repos}</li>
          <li> Location : {userInfo.location}</li>
        </ul>
      </div>
    </div>
  );
};

export default User;
