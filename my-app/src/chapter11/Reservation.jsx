import React, {useState} from "react";

function Reservation(props) {
    const [haveBreakfast, setHaveBreakfast] = useState(true); // target1
    const [numberOfGuest, setNumberOfGuest] = useState(2); // target2

    const handleSubmit = (event) => { // n개의 입력을 다룰 수 있음
        alert(`아침식사 여부: ${haveBreakfast}, 방문객 수: ${numberOfGuest}`);
        event.preventDefault();
    }

    return ( // 각 target에 대하여 setState 처리 해야함
        <form onSubmit={handleSubmit}>
            <label>
                아침식사 여부:
                <input type="checkbox" checked={haveBreakfast} onChange={(event) => setHaveBreakfast(event.target.checked)} />
            </label>
            <br />
            <label>
                방문객 수:
                <input type="number" value={numberOfGuest} onChange={(event) => setNumberOfGuest(event.target.value)} />
            </label>
            <button type="submit">제출</button>
        </form>
    );
}

export default Reservation;