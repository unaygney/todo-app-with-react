import cross from "../assets/icon-cross.svg";
import check from "../assets/icon-check.svg";
import { useContext , useState} from "react";
import MyContext from "../context/task";

function TodoItem({ todo  }) {
  const { handleDelete , handleCheckboxChange} = useContext(MyContext);
  const [isChecked, setIsChecked] = useState(todo.completed);
  const handleDeleteClick = () => {
    handleDelete(todo.id);
  };


  const toggleCheckboxChange = () => {
    setIsChecked((prevChecked) => !prevChecked); 
    handleCheckboxChange(todo.id);
  };
   


  return (
    <>
      <input
        className="checkbox"
        type="checkbox"
        checked={isChecked}
        onChange={toggleCheckboxChange}
      />

      <p className="todo-text"> {todo.text} </p>
      <button className="btn-delete" onClick={handleDeleteClick}>
        <img src={cross} alt="" />
      </button>
    </>
  );
}

export default TodoItem;
