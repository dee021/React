// import React from "react";

// class ConfirmButton extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = { isConfirmed: false, };
//         this.handleConfirm = this.handleConfirm.bind(this);
//     }

//     handleConfirm() {
//         this.setState((prevState) => ({
//             isConfirmed: !prevState.isConfirmed,
//         }));
//     }

//     render() {
//         return (
//             <button onClick={this.handleConfirm} disabled={this.state.isConfirmed}>
//             {this.state.isConfirmed? "확인됨" : "확인하기"}</button>
//         );
//     }
// }

import React, {useState} from 'react'; // useState 추가

function ConfirmButton(props) { // 클래스 -> 함수
    const [isConfirmed, setIsConfirmed] = useState(false);

    const handleConfirm = () => {
        setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
    };

    return ( // render() {return()} => return() 
        <button onClick={handleConfirm} disabled={isConfirmed}>
            {isConfirmed? '확인됨': '확인하기'}
        </button>
    );
}

export default ConfirmButton;