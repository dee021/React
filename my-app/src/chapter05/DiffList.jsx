import React from "react";
import Diff from "./Diff";

const comments = [
    {
        name: "홍길동",
        comment: "안녕하세요. 홍길동입니다.",
    },
    {
        name: "고길동",
        comment: "저는 둘리 보호자 고길동입니다.",
    },
    {
        name: "둘리",
        comment: "호이~~",
    },
    {
        name: "신영만",
        comment: "짱구는 지금 어디죠?",
    },
    {
        name: "봉미선",
        comment: "짱구는 지금 유치원에 있어요."
    }
];


function DiffList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Diff name={comment.name}
                    comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default DiffList;