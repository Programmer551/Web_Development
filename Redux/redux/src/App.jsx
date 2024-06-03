import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./redux/counter/counterSlice";
function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        {count}
      </div>
    </>
  );
}

export default App;
