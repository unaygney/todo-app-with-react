import cross from "../assets/icon-cross.svg";
import check from "../assets/icon-check.svg";
import { useState } from "react";
function TodoItem({todos , todo }) {

    
  const [textColor, setTextColor] = useState("#494C6B");
  const [completed, setCompleted] = useState(false);
  const [clicked, setClicked] = useState(true);


  const handleButtonClick = () => {
    setClicked(!clicked);
    setCompleted(!completed);
    setTextColor(completed ? "#494C6B" : "#D1D2DA");
    updateTodoStatus(completed);
  };

  return (
    <>
      <button className="todo-btn" onClick={handleButtonClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
        >
          <circle
            cx="12"
            cy="12"
            r="12"
            fill="url(#paint0_linear_0_479)"
            stroke="#E3E4F1"
          />
          {clicked ? (
            <circle cx="12" cy="12" r="11.5" fill="white" />
          ) : (
            <path
              d="M8 12.3041L10.6959 15L16.6959 9"
              stroke="white"
              strokeWidth="2"
            />
          )}
          <defs>
            <linearGradient
              id="paint0_linear_0_479"
              x1="-12"
              y1="12"
              x2="12"
              y2="36"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#55DDFF" />
              <stop offset="1" stopColor="#C058F3" />
            </linearGradient>
          </defs>
        </svg>
      </button>
      <p className="todo-text" style={{ textDecoration: completed ? 'line-through' : 'none', color: textColor  }}>
        {todo}
      </p>
      <button className="btn-delete">
        <img src={cross} alt="" />
      </button>
    </>
  );
}

export default TodoItem;
