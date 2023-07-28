import { useContext, useState } from "react";
import TodoItem from "./TodoItem";
import MyContext from "../context/task";

function TodoList() {
  const { todos, setTodos } = useContext(MyContext);

  
  return (
    <div>
      <ul className="todos">
        {todos.map((todo, idx) => (
          <li className="todo" key={idx}>
            <TodoItem todo={todo} key={todo.id} />
          </li>
        ))}
      </ul>
      <div className="todo-footer">
        <p>{todos.length} items left</p>
        <div className="buttons">
          <button>All</button>
          <button>Active</button>
          <button>Completed</button>
        </div>

        <button>Clear Completed</button>
      </div>
    </div>
  );
}

export default TodoList;
