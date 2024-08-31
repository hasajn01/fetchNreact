import { useState } from "react";
import './app.css'
import Form from "../form/Form";


function App() {
  const [todos, setTodos] = useState([]);

  const putTodo = (value) => {
    if (value) {
      setTodos([...todos, {id: Date.now(), text: value, done:false}]);
    } else {
      alert('Put Text')
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map( (todo) => {
      if (todo.id !== id) return todo;

      return {
        ...todo,
        done: !todo.done
      }
    }
    ))
  }

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }
 
  const idChan = (id) => {
    console.log(todos.filter( todo => todo.id !== id));
  }

  return (
    <>
      <div className="wrapper">
        <div className="container">
          <h1 className="title">TodoList</h1>
          <Form putTodo={putTodo} />
          <ul className="todos">
            {
              todos.map( (todo) => {
                return (
                  <li className='todo'key={todo.id} onClick={(e) => toggleTodo(todo.id)}>
                    <div className={todo.done ? 'done' : 'cancel'}></div>
                    <div className="div-todo">{todo.text}</div>
                    <img src="./delete.png" alt="delete" className="delete" onClick={ (e) => {
                      e.stopPropagation();
                      removeTodo(todo.id)
                      idChan(todo.id)
                    }}/>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
