import cross from "../assets/icon-cross.svg";
import check from "../assets/icon-check.svg";
import { useContext } from "react";
import MyContext from "../context/task";

function TodoItem({ todo , setTodo }) {
  const { handleDelete   } = useContext(MyContext);

  const handleDeleteClick = () => {
    handleDelete(todo.id);
  };





  

  return (
    <>
      <input
        className="checkbox"
        type="checkbox"

      />

      <p className="todo-text"> {todo.text} </p>
      <button className="btn-delete" onClick={handleDeleteClick}>
        <img src={cross} alt="" />
      </button>
    </>
  );
}

export default TodoItem;
