import { useState } from "react";
import "./TodoForm.css";

function TodoForm() {
  const [title, settitle] = useState("");
  const addList = () => {};
  return (
    <div>
      <div className="d-flex">
        <label htmlFor="title">
          Title
          <input type="text" id="title" />
        </label>
        <label htmlFor="message">
          Message
          <input type="text" id="message" />
        </label>
        <button onClick={addList}>Add</button>
      </div>
    </div>
  );
}

export default TodoForm;
