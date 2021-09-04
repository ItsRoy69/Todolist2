import React, { useState } from "react";
import "./styles.css";
import Todolist from "./Todolist.js";
export default function App() {
  const [todolist, settodolist] = useState([]);
  const [tvalue, setvalue] = useState("");
  function setonvalue(event) {
    const value = event.target.value;
    setvalue(value);
  }
  function addtext() {
    settodolist((prev) => {
      return [...prev, tvalue];
    });
    setvalue("");
  }
  function checked(id) {
    console.log("you clicked this");
    settodolist((prev) => {
      return todolist.filter((value, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div className="App">
      <h1>To-do List </h1>

      <input
        className="css-input"
        name="itemss"
        type="text"
        onChange={setonvalue}
        value={tvalue}
      />
      <button onClick={addtext}>SUBMIT</button>
      <div className="linkss">
        <ul>
          {todolist.map((value, index) => {
            return (
              <Todolist
                id={index}
                key={index}
                lochecked={checked}
                item={value}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}
