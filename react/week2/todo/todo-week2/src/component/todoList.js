import React from "react";
import TodoItems from "./todoItems";

const todos = [
  {
    id: 1,
    description: "Get out of bed",
  },
  {
    id: 2,
    description: "Brush teeth",
  },
  {
    id: 3,
    description: "Eat breakfast",
  },
  {
    id: 4,
    description: "do HW",
  },
  {
    id: 5,
    description: "DO the lunch",
  },
  {
    id: 6,
    description: "Go for a walk",
  },
  {
    id: 7,
    description: "Go to the doctor",
  },
  {
    id: 8,
    description: "Meet friends",
  },
];

const TodoList = ({ todo, setTodo }) => {
  const addTodo = () => {
    const getRandomTodo = todos[Math.floor(Math.random() * todos.length)];
    //if(randomIndex!==)
    console.log(getRandomTodo);
    setTodo([
      ...todo,
      {
        description: getRandomTodo.description,
        id: getRandomTodo.id,
        completed: false,
      },
    ]);
    // let lastTodoId = 0;
    // if (getRandomTodo != lastTodoId) {
    //   let random = s[getRandomTodo];
    //   lastNumber = getRandomNumber;
    // }
  };
  const handleClick = () => {
    addTodo();
  };

  const deleteTodo = removeTodo => {
    setTodo(todo.filter(todo => todo !== removeTodo));
  };

  const handleCompleted = todoId => {
    const changeComplete = todo.map(item => {
      if (item.id === todoId.id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setTodo(changeComplete);
  };
  return (
    <>
      <div className="add-container">
        <button onClick={handleClick} className="add-btn">
          Add new todo
        </button>
      </div>
      <div className="todo-container">
        {todo.length ? (
          <ul className="todo-list">
            {todo.map((todo, idx) => (
              <TodoItems
                key={idx}
                description={todo.description}
                todo={todo}
                setTodo={setTodo}
                deleteTodo={deleteTodo}
                handleCompleted={handleCompleted}
              />
            ))}
          </ul>
        ) : (
          <div>No tasks todo</div>
        )}
      </div>
    </>
  );
};

export default TodoList;
