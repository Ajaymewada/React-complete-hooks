import { useState } from "react";

function UseState() {
    const [counter, setCounter] = useState(0);
    console.log(setCounter);
    return (
        <>
            <button onClick={() => setCounter(counter <= 0 ? 0 : counter - 1)}>Minus</button>
            <h1>{counter}</h1>
            <button onClick={() => setCounter(counter + 1)}>Add</button>
        </>
    )
}
export default UseState;