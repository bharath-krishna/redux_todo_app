import { Container, List, Typography } from "@material-ui/core";
import React from "react";
import { connect, useSelector } from "react-redux";
import { getTodosByvisibleFilter } from "../reducers/selector";
import Todo from "./Todo";

function TodoList({ todos }) {
  return (
    <Container>
      <List>
        {todos && todos.length ? (
          todos.map((todo, index) => {
            return <Todo todo={todo} key={index} />;
          })
        ) : (
          <Typography variant="h6">haha no todos</Typography>
        )}
      </List>
    </Container>
  );
}

const mapStateToProps = (state) => {
  const { visibleFilter } = state;
  const todos = getTodosByvisibleFilter(state, visibleFilter);
  return { todos };
  //   const allTodos = getTodos(state);
  //   return {
  //     todos:
  //       visibleFilter === VISIBILITY_FILTERS.ALL
  //         ? allTodos
  //         : visibleFilter === VISIBILITY_FILTERS.COMPLETED
  //           ? allTodos.filter(todo => todo.completed)
  //           : allTodos.filter(todo => !todo.completed)
  //   };
};

export default connect(mapStateToProps, null)(TodoList);
