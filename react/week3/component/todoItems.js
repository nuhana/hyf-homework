import React,{useState} from "react";

const TodoItems = ({ description, todo, deleteTodo,
handleCompleted ,string, handleEdit}) => {
  
const [onEdit,setOnEdit]=useState(false)
const [editValue, setEditValue]=useState(description)

const editTodo=() => setOnEdit(true)
  
const handleSave=id=>{
  setOnEdit(false)
  if(editValue){
    handleEdit(editValue,id)
  }
  else{
    handleEdit(description)
  }
}

if(onEdit){
  return (
    <div className="todo">
      <li className= {`todo-item ${todo.completed? 'complete':''}`}>
     <input type="text" id='editValue' value={editValue} name='editValue'
     onChange={(e)=>setEditValue(e.target.value)}></input>
      </li>
      <button onClick={() => handleCompleted(todo)}
        className="complete-btn"
      >
        <i className="fa fa-check"></i>
      </button>
      <button
        onClick={() => {
          deleteTodo(todo);
        }}
        className="trash-btn"
      >
        <i className="fa fa-trash-o"></i>
      </button>
      <button className='save-btn' onClick={()=>handleSave(todo.id)}>save</button>
     
    </div>
  );
}else{
  return (
    <div className="todo">
      <li className= {`todo-item ${todo.completed? 'complete':''}`}>
      {editValue} ON {string}
      </li>
<button onClick={() => handleCompleted(todo)}
        className="complete-btn"
      >
        <i className="fa fa-check"></i>
      </button>
      <button
        onClick={() => {
          deleteTodo(todo);
        }}
        className="trash-btn"
      >
        <i className="fa fa-trash-o"></i>
      </button>

      <button
        onClick={editTodo}
        className="edit-btn"
      ><i className="fa fa-edit" ></i>
     </button>
     
    </div>
  );
}
};

export default TodoItems;
