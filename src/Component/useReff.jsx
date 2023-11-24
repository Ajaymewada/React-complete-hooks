import { useRef } from "react";

function UseRef() {
    let referenceElm = useRef();
    function nameChangeHandler() {
        console.log("Calling");
        referenceElm.current.innerText = "Pravallika Chandana"
    }
    return <>
        <h1 ref={referenceElm}>Hemanth Bharath</h1>
        <button onClick={nameChangeHandler}>Change The Name</button>
    </>
}

export default UseRef;