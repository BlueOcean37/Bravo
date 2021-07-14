import React from "react";
import Comment from './Comment.jsx';


const Comments = ({comments}) => {
return (
  <div>
    {comments.map((comment) =>
      <Comment comment ={comment} />
    )}
  </div>
)
};



export default Comments;