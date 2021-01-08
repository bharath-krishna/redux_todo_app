import { combineReducers } from "redux";
import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import todosReducer from "./todos";
import visibleFilterReducer from "./statusses";

const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
  todos: todosReducer,
  visibleFilter: visibleFilterReducer,
});

export default allReducers;
