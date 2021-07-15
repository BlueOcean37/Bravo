import React from 'react';

//ADD A COMMENT

const Comment = ({ comment }) => {
  return (
    <div class="commentBox">
      <p class="commentUsername"> Username: {comment.username} </p>
      <p class="commentDate"> Date: {comment.date} </p>
      <p class="commentext"> {comment.text} </p>
    </div>
  );
};

export default Comment;

//add
