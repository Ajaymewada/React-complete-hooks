import { useReducer } from "react";
import Reducer from "./Reducer";

function UseReducer() {
    const [counter, dispatch] = useReducer(Reducer, 0);
    function onAddHandler() {
        dispatch({ type: "INC" });
    }
    return (
        <>
            <button onClick={onAddHandler}>Add</button>
            <div>
                <h1>{counter}</h1>
            </div>
            <button onClick={() => dispatch({ type: "DEC" })}>Minus</button>
        </>
    )
}

export default UseReducer;