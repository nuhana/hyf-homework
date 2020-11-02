import React, { useState } from "react";
import TodoList from "./component/todoList";
import Counter from "./component/counter";
import "./App.css";

function App() {
  const [todo, setTodo] = useState([]);
  return (
    <>
      <Counter />
      <h1>Nouha's Todo List</h1>
      <div className="App">
        <TodoList todo={todo} setTodo={setTodo} />
      </div>
    </>
  );
}
export default App;
