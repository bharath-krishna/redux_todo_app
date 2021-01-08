import { Button, Container, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const handleOnChange = (e) => {
    setInput(e.target.value);
  };
  const handleOnClick = (e) => {
    dispatch(addTodo(input));
    setInput("");
  };
  return (
    <Container>
      <TextField variant="outlined" onChange={handleOnChange} value={input} />
      <Button onClick={handleOnClick} disabled={!input}>
        Add to TODO
      </Button>
    </Container>
  );
}

export default AddTodo;
