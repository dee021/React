import React from "react";
import Toolbar from "./Toolbar";

export const ThemeContext = React.createContext('Light');

function App(props) {
    return (
    <ThemeContext.Provider value="dark" >
    <Toolbar />
    </ThemeContext.Provider >
    );
}

export default App;