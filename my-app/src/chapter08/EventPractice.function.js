import React, {useState} from 'react';
import EventPractice from './EventPractice.class';

function EventPractive(props) {
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');

    const handleChange = e => {
        if (e.target.name == 'username') setUsername((prevUsername) => e.target.value);
        else setMessage((prevMessage) => e.target.value);
    }

    const handleClick = () => {
        alert(`${username}:${message}`);
        setUsername((prevUsername) => '');
        setMessage((prevMessage) =>'');
    }

    const handleKeyPress = e => {
        if (e.key === 'Enter') handleClick();
    }

    return (
        <div>
            <input type="text" name="username" placeholder="유저명"
            value={username} onChange={handleChange} />
            <input type="text" name="message" placeholder="아무거나 입력해보세요"
            value={message} onChange={handleChange} onKeyPress={handleKeyPress} />
            <button onClick={handleClick}>확인</button>
        </div>
    );
}

export default EventPractice;