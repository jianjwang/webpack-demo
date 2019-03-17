import React from "react";

export default class Todo extends React.Component {
  render() {
    //return <div>{this.props.todo.text}</div>;
    return <li className="list-group-item list-group-item-action active">{this.props.todo.text}</li>;
  }
}
