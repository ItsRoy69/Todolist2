import React from "react";

function Todolist(props) {
  return (
    <li
      onClick={() => {
        props.lochecked(props.id);
      }}
    >
      {props.item}
    </li>
  );
}
export default Todolist;
