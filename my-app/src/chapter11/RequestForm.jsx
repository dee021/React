import React, {useState} from "react";

function RequestForm(props) {
    const [value, setValue] = useState('요청사항을 입력하세요');

    const handleChange = (event) => { // textarea 태그의 child 값(내용)을 value로 변경할 수 있음
        setValue(event.target.value);
    }

    const handleSubmit = (event) => {
        alert('입력한 요청사항:' + value);
        event.preventDefault(); // 눌렀을 때 링크 ...?
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                요청사항: 
                <textarea value={value} onChange={handleChange} />
            </label>
            <button type="submit">제출</button>
        </form>
    )
}

export default RequestForm;