import React from "react";
import Button from "./Button";
import { ThemeContext } from "./App";

function ThemedButton(props) {
    return (
    <ThemeContext.Consumer>
        { value=> <Button theme={value} />}
    </ThemeContext.Consumer>
    );
}

export default ThemedButton;