function Reducer(counter, action) {
    if (action.type == "INC") {
        counter = counter + 1;
    } else {
        counter = counter - 1;
        if(counter <= 0) {
            counter = 0;
        }
    }
    return counter;
}

export default Reducer;