import React, {useState} from "react";

function Button(props) {
    const [theme, setTheme] = useState(props.theme);

    const btnClick = () => {
        var next = theme === 'dark'? 'white': 'dark'
        setTheme(next);
    }

    return <button onClick={btnClick} style={{
        backgroundColor: theme==='dark'? "black": "white",
        color: theme==='dark'? "white": "black",
    }}>버튼</button>
}

export default Button;