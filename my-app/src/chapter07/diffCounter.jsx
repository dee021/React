eslint-disable-line 
import React, { useState } from "react";

function useCounter(initialVlaue) {
    const [count, setCount] = useState(initialVlaue);

    const increaseCount = () => setCount((count) => count + 1);
    const decreaseCount = () => setCount((count) => count - 1);

    return [count, increaseCount, decreaseCount];
}

export default useCounter;
no-unused-vars