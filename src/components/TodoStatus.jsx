import { Container } from "@material-ui/core";
import React, { useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { setVisibleFilter } from "../actions";
import Todo from "./Todo";

const filters = ["All", "Completed", "Pending"];

function TodoStatus({ visibleFilter, setVisibleFilter }) {
  // const [visibleFilter, setVisibleFilter] = useState("All");
  // const visibleFilter = useSelector((state) => state.visibleFilter);
  // const dispatch = useDispatch();
  return (
    <Container>
      {filters.map((filter, index) => {
        return (
          <span
            key={index}
            style={{
              // fontWeight: "bolder",
              textDecoration: filter === visibleFilter ? "underline" : "",
              padding: 4,
            }}
            onClick={() => setVisibleFilter(filter)}
          >
            {filter}
          </span>
        );
      })}
    </Container>
  );
}

function mapStateToProps(state) {
  return {
    visibleFilter: state.visibleFilter,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setVisibleFilter: (filter) => dispatch(setVisibleFilter(filter)),
  };
}

// export default TodoStatus;
export default connect(mapStateToProps, mapDispatchToProps)(TodoStatus, Todo);
