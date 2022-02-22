import { useState } from "react";
import "./TodoCard.css";

function TodoCard() {
  const [list, setlist] = useState([
    {
      tile: "React",
      message: "Hooks",
    },
    {
      tile: "JS",
      message: "Loops",
    },
    {
      tile: "Angular",
      message: "Typescript",
    },
  ]);

  return (
    <div>
      {list.map((listval) => {
        return (
          <div className="align-txt-results">
            <div>
              <h2>{listval.tile}</h2>
              <p>{listval.message}</p>
            </div>
            <div>
              <button>Edit</button>
              <button>Delete</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TodoCard;
