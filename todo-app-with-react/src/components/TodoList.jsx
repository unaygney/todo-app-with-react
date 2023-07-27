import TodoItem from './TodoItem'

function TodoList({todos }) {


    return ( 
        <div>
         <ul className='todos'>
            {todos.map((todo , idx) => (
                <li className='todo'>
                    <TodoItem todos= {todos} todo={todo} />
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