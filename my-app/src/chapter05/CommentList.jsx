import React from "react";
import Comment from "./Comment";

// function CommentList(props) {
//     return (
//         <div>
//             <Comment/>
//         </div>
//     );
// }

// function CommentList(props) {
//     return (
//         <div>
//             <Commnet name={"제니"} commnet={"안녕하세요. 블랙핑크 입니다."}/>
//             <Commnet name={"로제"} commnet={"리액트 재미있어요."}/>
//         </div>
//     )
// }

const comments = [
    {
        name: "제니",
        comment: "안녕하세요. 블랙핑크입니다.",
    },
    {
        name: "로제",
        comment: "리액트 재미있어요~!!",
    },
    {
        name: "리사",
        comment: "저도 리액트 배워보고 싶어요!!",
    },
];

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment
                    name={comment.name}
                    comment={comment.comment} />
                );
            })}
        </div>
    );
}


export default CommentList;