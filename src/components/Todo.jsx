import { ListItem, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { toggleTodo } from "../actions";

function Todo({ todo, dispatchToggleTodo, key }) {
  return (
    <ListItem button onClick={() => dispatchToggleTodo(todo.id)} key={key}>
      <Typography
        style={{
          color: todo.completed ? "green" : "red",
        }}
      >
        {todo.content}
      </Typography>
    </ListItem>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchToggleTodo: (id) => dispatch(toggleTodo(id)),
  };
};

export default connect(null, mapDispatchToProps)(Todo);
