import "./App.css";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import TodoResults from "./components/TodoResults";
function App() {
  return (
    <div className="App">
      <TodoList />
      <TodoForm />
      <TodoResults />
    </div>
  );
}

export default App;
