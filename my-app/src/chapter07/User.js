import React, {useState, useEffect} from "react";
// import useUser from './useUser'; 
// eslint-disable-line no-unused-vars

function User(props) {

    const [name, setName] = useState('');
    const chname = (e) => { setName((name) => e.target.value); }

    const [alias, setAlias] = useState('');
    const chalias = (e) => { setAlias((alias) => e.target.value); }
    
    // 마운트될때만
    useEffect(() => {
        console.log('렌더링이 완료되었습니다.');
    }, []);

    // 렌더링될때 = didmount + didupdate
    useEffect(() => {
        console.log('렌더링이 완료되었습니다.');
        console.log({name, alias});
    });

    return (
        <div style={{padding:16}}>
            <input type="text" id="name" onChange={chname}></input> 
            <input type="text" id="alias" onChange={chalias}></input>

            <p><b>이름: </b>{name}</p>
            <p><b>닉네임: </b>{alias}</p>
        </div>
    );
}

export default User;