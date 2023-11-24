import React from "react";

const AppContext = React.createContext();

function AppProvider(props) {
    let useInformation = {
        name: "Hemanth",
        age: 25
    }
    return <AppContext.Provider value={useInformation}>{props.children}</AppContext.Provider>
}

export { AppContext, AppProvider }