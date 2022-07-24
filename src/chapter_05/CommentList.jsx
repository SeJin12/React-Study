import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "KSJ",
        comment: "HI"
    }, {
        name: "ANY",
        comment: "HELLO"
    }, {
        name:"OTHER",
        comment: "SOME"
    }
]

function CommentList(props) {
    return (
        <div>
            {
                comments.map((comment) => {
                    return (
                        <Comment name = {comment.name} comment = {comment.comment} />
                    )
                })
            }
        </div>
    )
}


export default CommentList;