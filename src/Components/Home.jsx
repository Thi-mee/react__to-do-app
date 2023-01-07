import React, { useState } from "react";
import NewSpace from "./InsertNewTodo";
import Todo from "./To-do";

function Home() {
  const [todos, setTodo] = useState([
    // "Todo Item 1",
    // "Todo Item 2",
    // "Todo Item 3",
  ]);

  function deleteTodo(index) {
    setTodo(todos.filter((todo, i) => i !== index));
  }
  function addTodo (value) {
    if (value === "") {
      alert("Please enter a todo item");
      return;
    }
    setTodo([value, ...todos]);
  }
  function editTodo (index) {
    console.log(index);
  }


  return (
    <div className="Home">
      <NewSpace addTodo={addTodo} editTodo={editTodo}/>

      {todos.map((todo, index) => {
        return (
          <Todo key={index} deleteTodo={deleteTodo} index={index} todo={todo} editTodo={editTodo}/>
        );
      })}

    </div>
  );
}

export default Home;
