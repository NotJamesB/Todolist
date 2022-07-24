import React, {useState} from "react";
import './App.css';

function App() {
  const[newTodo, setNewTodo] = useState("");
  const[todos, setTodos] = useState([]);
  
  const handleNewTodoSubmit = (event) => {
    event.preventDefault();

    const todoItem = {
      text: newTodo,
      complete: false
    };

    setTodos([...todos, todoItem])
    setNewTodo("");
  };

  const handleTodoDelete = (delIdx) => {
  const filteredTodos = todos.filter((todo, i) => {
      return i !== delIdx;
    });
    setTodos(filteredTodos);
  }

  return (
    <div>
      <form onSubmit={(event) =>{
        handleNewTodoSubmit(event);
      }}>
        <input onChange={(event) => {
          setNewTodo(event.target.value)
          }} type="text" 
          value={newTodo}></input>
        <p>
          <button>Add</button>
        </p>
      </form>
        
        {
          todos.map((todo, i) =>{
            return <div key={i}>
              <input type="checkbox"></input>
              <span>{todo.text}</span>
              <button onClick={(event) =>{handleTodoDelete(i);}} >Delete</button>
              </div>
          })
        }
        
    </div>
  );
}

export default App;
