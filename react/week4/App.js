import React, { useState } from "react";
import "./App.css";
import { UsersInput } from "./components/UsersInput";
import { UserContext } from "./userContex";
function App() {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  return (
    <UserContext.Provider
      value={{
        users,
        setUsers,
        query,
        setQuery,
        isLoading,
        setIsLoading,
        error,
        setError,
      }}
    >
      <div className="App">
        <UsersInput />
      </div>
    </UserContext.Provider>
  );
}

export default App;
