import "../src/style/style.css";
import Main from "./components/main/Main";
import Party from "./components/party/Party";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "./actions";

function App() {
  const counter = useSelector((state) => state.counterReducer);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1> {counter}</h1>

      <button onClick={() => dispatch(increment())}>+</button>
      <button>-</button>
      <Main />
      <Party />
    </div>
  );
}

export default App;
