import React, {useState, useMemo, useRef, useCallback} from 'react';

const getAverage = numbers => {
    console.log('평균값 계산중..');
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length;
};

const Average = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');
    const inputEl = useRef(null);

    const onChange = useCallback(e => {
        setNumber(e.target.value);
    }, []);
    
    const onInsert = useCallback(() => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
        inputEl.current.focus();
    }, [number, list]);

    const avg = useMemo(() => getAverage(list), [list]);

    return (
        <div style={{padding:16}}>
            <input type="text" onChange={onChange} value={number} ref={inputEl}></input>
            <button onClick={onInsert}>등록</button>
            <ul> {list.map(v => (<li>{v}</li>))} </ul>
            <p><b>평균값:</b> {avg}</p>
        </div>
    )
}

export default Average;