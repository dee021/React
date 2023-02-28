import React, {useState} from "react";

function FruitSelect(props) {
    const [value, setValue] = useState('요청사항을 입력하세요');

    const handleChange = (event) => {
        setValue(event.target.value); // value로 선택된 옵션 관리
    }

    const handleSubmit = (event) => {
        alert('선택한 과일:' + value);
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                과일을 선택하세요:
                <select value={value} onChange={handleChange}>
                {/* <select multiple={true} value={['apple', 'banana']}> // 다중값 */}
                <option value="apple">사과</option>
                <option value="banana">바나나</option>
                <option value="grape">포도</option>
                <option value="watermelon">수박</option>
                </select>
            </label>
            <button type="submit">제출</button>
        </form>
    )
}

export default FruitSelect;