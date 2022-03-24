/*
const TodoList = () => {
  return(`
        <ul>
            <li>Buy milk</li>
            <li>Pickup the kids</li>
            <li>Walk the dog</li>
        </ul>
    `);
}
export default TodoList;

import TodoItem from "./todo-item.js";
const TodoList = () => {
  return(`
        <ul>
            ${TodoItem('Buy milk')}
            ${TodoItem('Pickup the kids')}
            ${TodoItem('Walk the dog')}
        </ul>
    `);
}
export default TodoList;
*/

/*
import TodoItem from "./todo-item.js";
import todos from "./todos.js";
const TodoList = () => {
  return(`
        <ul>
            ${
      todos.map(todo => {
        return(TodoItem(todo));
      }).join('')
  }
        </ul>
    `);
}
export default TodoList;
*/

import TodoItem from "./todo-item";
import todos from "./todos.json";
import React from "react";

const TodoList = () => {
  return(
      <ul>
        {
          todos.map(todo => {
            return(<TodoItem todo={todo}/>);
          })
        }
      </ul>
  );
}
export default TodoList;
