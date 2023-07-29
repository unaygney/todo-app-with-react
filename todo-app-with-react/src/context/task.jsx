import { createContext, useState } from "react";

const MyContext = createContext();

function Provider({ children }) {
  const [todos, setTodos] = useState([
    { id: 1, text: "Jog around the park 3x" , completed : false },
    { id: 2, text: "10 minutes meditation" , completed : false},
    { id: 3, text: "Read for 1 hour" ,completed : false},
    { id: 4, text: "Pick up groceries" ,completed : false},
    { id: 5, text: "Complete Todo App on Frontend Mentor", completed : false}
  ]);
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim() !== "") {
      const newTodo = {
        id: todos.length + 1,
        text: todo , 
        completed : false
      };
      setTodos([...todos, newTodo]);
      setTodo("");
    }
  };
  const getClearCompleted = () => {
    const clearCompleted = todos.filter((filterTodo) => !filterTodo.completed)
    setTodos(clearCompleted)
  }

  const getActive = () => {
    setShowActive(true);
  }

  const getAll = () => {
    setShowActive(false)
  }


  const [showActive, setShowActive] = useState(false);
  const filteredTodos = showActive ? todos.filter((todo) => !todo.completed) : todos;


  const handleDelete = (deleteTodoId) => {
  
    const deleteTodos = todos.filter((todo) => todo.id !== deleteTodoId)
    setTodos(deleteTodos)
  };

  const handleCheckboxChange = (todoId) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const sharedData = {todos , todo , handleSubmit , handleDelete ,handleCheckboxChange, setTodo , setTodos  , getClearCompleted , getActive , getAll , filteredTodos ,showActive ,setShowActive}

  return (
    <MyContext.Provider value={sharedData}>
      {children}
    </MyContext.Provider>
  );
}

export { Provider };
export default MyContext;
