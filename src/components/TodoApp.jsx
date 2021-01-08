import { Typography } from "@material-ui/core";
import React from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import TodoStatus from "./TodoStatus";

function TodoApp() {
  return (
    <React.Fragment>
      <Typography variant="h4" style={{ fontWeight: "bolder" }}>
        TODO List
      </Typography>
      <AddTodo />
      <TodoList styles={{ alignContent: "center" }} />
      <TodoStatus />
    </React.Fragment>
  );
}

export default TodoApp;
