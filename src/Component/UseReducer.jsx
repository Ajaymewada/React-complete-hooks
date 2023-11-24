import { useReducer } from "react";
import Reducer from "./Reducer";
import { useContext } from "react";
import { AppContext } from "../AppProvider";

function UseReducer() {
    const [counter, dispatch] = useReducer(Reducer, 0);
    function onAddHandler() {
        dispatch({ type: "INC" });
    }
    let value = useContext(AppContext);
    const { name, age } = value
    console.log(value);
    return (
        <>
            <h1>{name} {age} Data from Reducer component</h1>
            <button onClick={onAddHandler}>Add</button>
            <div>
                <h1>{counter}</h1>
            </div>
            <button onClick={() => dispatch({ type: "DEC" })}>Minus</button>
        </>
    )
}

export default UseReducer;