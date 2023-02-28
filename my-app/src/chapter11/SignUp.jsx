import React, {useState} from "react";

function SignUp(props) {
    const [name, setName] = useState('');
    const [gender, setGender] = useState('남자');
    const [addr, setAddr] = useState('서울');

    const handleChangeName = (event) => {
        setName(event.target.value);
    };

    const handleChangeGender = (event) => {
        setGender(event.target.value);
    }

    const handleChangeAddr = (event) => {
        setAddr(event.target.value);
    }

    const handleSubmit = (event) => {
        alert(`이름: ${name}, 성별: ${gender}, 지역: ${addr}`);
        event.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                이름: 
                <input type="text" value={name} onChange={handleChangeName} />
            </label>
            <br />
            <label>
                성별:
                <select value={gender} onChange={handleChangeGender}>
                <option value="남자">남자</option>
                <option value="여자">여자</option>
                </select>
            </label>
            <br />
            <label>
                지역:
                <select value={addr} onChange={handleChangeAddr}>
                    <option value="서울">서울</option>
                    <option value="경기도">경기도</option>
                    <option value="강원도">강원도</option>
                    <option value="부산">부산</option>
                    <option value="대구">대구</option>
                </select>
            </label>

            <button type="submit">제출</button>
        </form>
    )
}

export default SignUp;