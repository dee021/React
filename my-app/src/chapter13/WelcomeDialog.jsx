import React from "react";
import Dialog from "./Dialog";

function WelcomeDialog(props) {
    // FancyBorder의 클래스명에 붙음 color="blue"
    // return (
    //     <FancyBorder color="blue"> 
    //         <h1 className="Dialog-title">어서오세요</h1>
    //         <p className="Dialog-message">우리 사이트에 방문하신것을 환영합니다.</p>
    //     </FancyBorder>
    // );

    return (
        <Dialog title="어서 오세요" message="우리 사이트에 방문하신 것을 환영합니다!" />
    );
}

export default WelcomeDialog;
