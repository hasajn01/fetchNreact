import { useState } from "react";
import "./app.css";
import Form from "../form/Form";
import Checker from '../checker/Checker'

function App() {
  const [todos, setTodos] = useState([]);


  const putTodo = (value) => {
    if (value) {
      setTodos([...todos, { id: Date.now(), text: value, done: false }]);
    } else {
      alert("Put Text");
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) return todo;

        return {
          ...todo,
          done: !todo.done,
        };
      })
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <div className="wrapper">
        <div className="box">
          <h1 className="title"> TODOLIST</h1>
          <Form putTodo={putTodo} />
          <Checker todo={todos}/>
          <ul className="todo-list">
            {todos.map((todo) => {
              return (
                <li key={Date.now} className="item">
                  <div className="check">
                    <div
                      className={todo.done ? "check-box done" : "check-box"}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleTodo(todo.id);
                      }}
                    ></div>
                    {todo.text}
                  </div>
                  <img
                    src="/delete.png"
                    alt="delete"
                    className="delete"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeTodo(todo.id);
                    }}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
