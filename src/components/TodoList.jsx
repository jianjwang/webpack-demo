import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";

export default class TodoList extends React.PureComponent {
  renderBody() {
    return this.props.todos.map((todo, index) => (
      <Todo key={index} todo={todo}/>
    ))
  }
  render() {
    return <ul className="list-group">{this.renderBody()}</ul>;
  }
}

TodoList.propTypes = {
  todo: PropTypes.any
};
