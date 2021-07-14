import React from "react";

//ADD A COMMENT

const Comment = ({comment}) => (

<div class='commentBox'>

<p class = 'commentUsername'>  {comment.username} </p>
<p class = 'commentDate'>  {comment.date} </p>
 <p class = 'commentext'> {comment.commentText} </p>


</div>





);

export default Comment;