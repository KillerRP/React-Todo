import "./TodoResults.css";
import TodoCard from "./TodoCard";

function TodoResults(props) {
  return (
    <div className="result-wrapper">
      <h1>Results</h1>
      <TodoCard list={props.list} />
    </div>
  );
}

export default TodoResults;
