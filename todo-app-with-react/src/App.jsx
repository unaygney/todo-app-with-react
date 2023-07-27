import sun from "./assets/icon-sun.svg";
import moon from "./assets/icon-moon.svg";

import { useState } from "react";
import TodoList from './components/TodoList'
import "./App.css";

function App() {
  const [todos, setTodos] = useState(['Jog around the park 3x' ,'10 minutes meditation' , 'Read for 1 hour', 'Pick up groceries' , 'Complete Todo App on Frontend Mentor'  ]);
  const [todo, setTodo] = useState("");




  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim() !== '') {
      setTodos([...todos, todo]);
      setTodo('');
  }}
  return (
    <div className="container">
      <div className="upper-container">
        <h1>TODO</h1>
        <img src={sun} alt="sun" />
      </div>

      <div className="input-container">
        <form onSubmit={handleSubmit}>
          <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} placeholder="Create a new todo…" />
          <button className="submit-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <circle cx="12" cy="12" r="12" fill="white" stroke="#E3E4F1" />
            </svg>
          </button>
        </form>
      </div>

      <div className="todos-container">
       <TodoList todos={todos} />
      </div>
    </div>
  );
}

export default App;
