import React from "react";
import "./App.css";

const TodoList = props => {
  return (
    <>
      <input type="text" value={props.description}></input>
      <input type="text" value={props.deadline}></input>
      <br></br>
    </>
  );
};
const tasks = [
  {
    description: "Get out of bed",
    deadline: " Wed Sep 13 2017",
  },
  {
    description: "Brush teeth ",
    deadline: " Thu Sep 14 2017",
  },
  { description: "Eat breakfast ", deadline: " Fri Sep 15 2017" },
  {
    description: "Do the HW",
    deadline: " Thu Sep 14 2017",
  },
];
function App() {
  return (
    <div className="App">
      {<h1>My Todo List</h1>}
      {tasks.map(task => {
        return (
          <TodoList description={task.description} deadline={task.deadline} />
        );
      })}
    </div>
  );
}

export default App;
