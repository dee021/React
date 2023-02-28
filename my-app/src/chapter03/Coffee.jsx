import React from "react";
import Cafe from "./Cafe";

function Coffee(props) {
    return (
        /* jshint ignore:start */
        <div>
            <Cafe name="아메리카노" cost={4000} />
            <Cafe name="바닐라라떼" cost={4500} />
            <Cafe name="고구마라떼" cost={5000} />
        </div>
        /* jshint ignore:end */
    );
}

export default Coffee;