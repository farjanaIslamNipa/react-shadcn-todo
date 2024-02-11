import {decrement, increment, incrementByValue} from "@/redux/features/counterSlice";
import {useAppDispatch, useAppSelector} from "@/redux/hook";


const Counter = () => {
  const {count} = useAppSelector((state) => state.counter)
  const dispatch = useAppDispatch()
  return (
    <div>
            <div className="flex gap-4 m-20 items-center">
        <button onClick={() => dispatch(incrementByValue(5))} className="px-3 py-2 rounded-md bg-green-700 text-white font-semibold">Increment by 5</button>
        <button onClick={() => dispatch(increment())} className="px-3 py-2 rounded-md bg-green-700 text-white font-semibold">Increment</button>
        <h1 className="text-2xl font-semibold mx-4">{count}</h1>
        <button onClick={() => dispatch(decrement())} className="px-3 py-2 rounded-md bg-green-700 text-white font-semibold">Decrement</button>
      </div>
    </div>
  );
};

export default Counter;