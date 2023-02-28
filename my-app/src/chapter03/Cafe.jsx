import React from "react";

function Cafe(props) {
    return (
        /* jshint ignore:start */
        <div>
            <h1>{`이 음료의 이름은 ${props.name}입니다.`}</h1>
            <h2>{`이 음료의 가격은 ${props.cost}입니다.`}</h2>
        </div>
        /* jshint ignore:end */
    );
}

export default Cafe;