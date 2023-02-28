import React, { useState } from "react";

const styles = {
    table : {
        border : "1px solid black",
        borderCollapse: "collapse",
    },
    th : {
        border : "1px solid black",
        width: "300px",
    },
    td : {
        border : "1px solid black",
    },
    delete : {
        border : "1px solid black",
        width: "50px",
    }
}

const EventPractice = () => {
    const [form, setForm] = useState({
        username: '',
        message: ''
    });
    const {username, message} = form;
    const [users, setUsers] = useState([
    ]);   


    const onChange = e => {
        setTimeout(() => console.log(e), 500);
        const nextForm = {
            ...form, 
            [e.target.name]: e.target.value 
        };
        setForm(nextForm);
    };
    
    const onClick = () => {
        setUsers(users.concat({name: username, msg: message}))
        alert(username + ':' + message);
        setForm({
            username: '',
            message: ''
        });
    };

    const onKeyPress = e => {
        if(e.key === 'Enter') {
            onClick();
        }
    };

    const onRemove = e => {
        const remove = document.getElementById(e.target.id).id;
        const nextUsers = users.filter((user, index) => {
            return index != remove
        });
        setUsers(nextUsers);
        setForm({
            username: '',
            message: ''
        });
    };

    const userList = users.map((user, index) => <tr key={index}><td style={styles.td}>{user.name}</td><td style={styles.td}>{user.msg}</td><td style={styles.td}><button id={index} onClick={onRemove}>삭제</button></td></tr>)

    return (
        <div>
            <h1>이벤트 연습</h1>
            <input 
            type="text" name="username" placeholder="유저명"
            value={username} onChange={onChange} />
            <input 
            type="text" name="message" placeholder="아무거나 입력해보세요"
            value={message} onChange={onChange} onKeyPress={onKeyPress} />
            <button onClick={onClick}>확인</button>
            <button onClick={onRemove}>삭제</button>

            <hr />
            <table style={styles.table}>
                <thead><tr><th style={styles.th}>유저명</th><th style={styles.th}>메세지</th><th style={styles.delete}>삭제</th></tr></thead>
                <tbody>
                    {userList}
                </tbody>
            </table>
        </div>
    );
};

export default EventPractice;