import { useState } from "react";
import "./TodoForm.css";

function TodoForm(props) {
  const [title, settitle] = useState("");
  const [message, setmessage] = useState("");

  const titleChange = (e) => {
    settitle(e.target.value);
  };
  const messageChange = (e) => {
    setmessage(e.target.value);
  };

  const setTodo = () => {
    if (title === "" || message === "") {
      console.log("Empty");
    } else {
      console.log(title, message);
      const newTodo = { title, message };
      props.setlist([...props.list, newTodo]);
    }
  };
  return (
    <div>
      <form className="d-flex">
        <label htmlFor="title">
          Title
          <input type="text" id="title" onChange={titleChange} required />
        </label>
        <label htmlFor="message">
          Message
          <input type="text" id="message" onChange={messageChange} required />
        </label>
        <button onClick={setTodo}>Add</button>
      </form>
    </div>
  );
}

export default TodoForm;
