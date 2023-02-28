import React, {useEffect} from "react";
import useCounter from "./diffCounter";

function Diff(props) {
    const [count, increaseCount, decreaseCount] = useCounter(0);

    useEffect(() => {
        console.log('=====================');
        console.log('useEffect() is called.');
        console.log(`Current count value: ${count}`);
    })
    return (
        <div style={{padding:16}}>
            <p>현재 카운터 값은 {count}입니다.</p>

            <button onClick={increaseCount}>+1</button>
            <button onClick={decreaseCount}>-1</button>
        </div>
    )
}

export default Diff;