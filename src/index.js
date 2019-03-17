import { add, mins } from "./services/calc";
import React from "react";
import { render } from "react-dom";
import TodoList from "./components/TodoList";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const result = add(100, 500);
const todos = [
  {
    text: "Hello"
  },
  {
    text: "World"
  },
  {
    text: "RedHat"
  }
];

render(<TodoList todos={todos} />, document.getElementById("root"));
//document.getElementById("root").innerHTML = result;
