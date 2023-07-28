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

  const handleDelete = (deleteTodoId) => {
  
    const deleteTodos = todos.filter((todo) => todo.id !== deleteTodoId)
    setTodos(deleteTodos)
  };

  const handleCheckboxChange = (todoId) => {
    
    const updatedTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };


  const sharedData = {todos , todo , handleSubmit , handleDelete ,handleCheckboxChange, setTodo  }

  return (
    <MyContext.Provider value={sharedData}>
      {children}
    </MyContext.Provider>
  );
}

export { Provider };
export default MyContext;
