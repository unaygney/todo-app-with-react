import sun from "./assets/icon-sun.svg";
import moon from "./assets/icon-moon.svg";
import TodoList from "./components/TodoList";
import "./App.css";
import { useContext } from "react";
import MyContext from "./context/task";
function App() {

  const {handleSubmit , todo , setTodo } = useContext(MyContext);


  return (
    <div className="container">
      <div className="upper-container">
        <h1>TODO</h1>
        <img src={sun} alt="sun" />
      </div>
  
      <div className="input-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder="Create a new todo…"
          />
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
        <TodoList />
      </div>
    </div>
  );

}


export default App;
