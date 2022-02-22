import "./App.css";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import TodoResults from "./components/TodoResults";
import { useState } from "react";

function App() {
  const [list, setlist] = useState([]);

  return (
    <div className="App">
      <TodoList />
      <TodoForm setlist={setlist} list={list} />
      <TodoResults list={list} />
    </div>
  );
}

export default App;
