export const increment = (num) => {
  return { type: "INCREMENT", payload: num };
};

export const decrement = (num) => {
  return { type: "DECREMENT", payload: num };
};

export const toggleSignin = () => {
  return { type: "SIGN_IN" };
};

let todoId = 0;
export const addTodo = (content) => {
  return { type: "addTodo", payload: { id: ++todoId, content } };
};

export const toggleTodo = (id) => {
  return { type: "toggleTodo", payload: { id } };
};

export const setVisibleFilter = (filter) => {
  return { type: "setVisibleFilter", payload: filter };
};
