import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { Button, Container, Grid } from "@material-ui/core";
import { increment, decrement, toggleSignin } from "./actions";
import TodoApp from "./components/TodoApp";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Grid container>
            <Grid item sm={12} md={6}>
              Counter: {counter}
              <br></br>
              IsLogged:{" "}
              {isLogged ? (
                <div>authenticated</div>
              ) : (
                <div>not authenticated</div>
              )}
              <Button variant="outlined" onClick={() => dispatch(increment(5))}>
                +5
              </Button>
              <Button variant="outlined" onClick={() => dispatch(decrement(4))}>
                -4
              </Button>
              <br></br>
              <Button onClick={() => dispatch(toggleSignin())}>
                {isLogged ? <div>Log out</div> : <div>Login</div>}
              </Button>
            </Grid>
            <Grid item sm={12} md={6}>
              <TodoApp />
            </Grid>
          </Grid>
        </Container>
      </header>
    </div>
  );
}

export default App;
