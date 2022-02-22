import "./TodoCard.css";

function TodoCard(props) {
  return (
    <div>
      {props.list.map((listval) => {
        return (
          <div className="align-txt-results">
            <div>
              <h2>{listval.title}</h2>
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
