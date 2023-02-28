import React from "react";
import Button from "./Button";

function ThemedButton(props) {
    return (
        <Button theme={props.theme} />
    )
}

export default ThemedButton;