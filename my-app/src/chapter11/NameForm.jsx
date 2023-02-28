import React, {useState} from "react";

function NameForm(props) {
    const [value, setValue] = useState('');
    const handleChange = (event) => { 
        setValue(event.target.value); // value로 입력된 값 관리
    }

    const handleSubmit = (event) => { // 
        alert('입력한 이름:' + value);
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                이름: 
                <input type="text" name="name" onChange={handleChange}/>
            </label>
            <button type="submit">제출</button>
        </form>
    )
}

export default NameForm;