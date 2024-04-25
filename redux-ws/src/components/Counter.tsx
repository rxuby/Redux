import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../store/slice/counterSlice";
import { RootState } from "../store/store";

function CounterPage() {
  const count = useSelector((state: RootState) => state.counter.value); //ดึงข้อมูลจาก store
  const dispatch = useDispatch(); //
  return (
    <div>
      <button
        arial-label="Increment value"
        onClick={() => dispatch(increment())} //call function increment
      >
        Increment
      </button>
      <span>{count}</span>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </div>
  );
}

export default CounterPage;
