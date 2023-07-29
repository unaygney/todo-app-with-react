import { useContext, useState , useEffect } from "react";
import TodoItem from "./TodoItem";
import MyContext from "../context/task";

function TodoList() {
  const { todos, setTodos  , todo , setTodo ,getActive,getAll ,filteredTodos,getClearCompleted} = useContext(MyContext);

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }

    const storedTodo = localStorage.getItem("todo");
    if (storedTodo) {
      setTodo(storedTodo);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    localStorage.setItem("todo", todo);
  }, [todo]);



//  console.log(todos)
  console.log(filteredTodos)

   
  return (
    <div>
      <ul className="todos">
        {filteredTodos.map((todo, idx) => (
          <li className="todo" key={idx}>
            <TodoItem todo={todo} key={todo.id} />
          </li>
        ))}
      </ul>
      <div className="todo-footer">
        <p>{todos.length} items left</p>
        <div className="buttons">
        <button onClick={getAll} >All</button>
          <button onClick={getActive}>Active</button>
          <button>Completed</button>
        </div>

        <button onClick={getClearCompleted}>Clear Completed</button>
      </div>
    </div>
  );
}

export default TodoList;
