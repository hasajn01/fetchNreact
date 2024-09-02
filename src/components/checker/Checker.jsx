import "./checker.css";

function Checker( {todo}) {
  return (
    <div className="checker">
      <div className="all-todo"> <img src="/all-todos.svg" alt="done" className="img-done" />{todo.length} </div>
      <div className="done-todo"> <img src="/done.svg" alt="done" className="img-done" />{todo.filter(td => td.done).length}</div>
      <div className="cancel-todo"> <img src="/cancel.svg" alt="done" className="img-done" />{todo.filter(td => td.done === false).length} </div>
    </div>
  );
}
 
export default Checker;
