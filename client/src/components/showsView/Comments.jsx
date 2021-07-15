import React from "react";
import Comment from './Comment.jsx';


const Comments = ({comments}) => {
  return (
    <div>
  {/* if (comments) { */}
<p> Comments: </p>
  <div>
    {comments ? comments.map(comment => {
      return (
      <Comment comment ={comment} />
    )}) : null
      }
  </div>

    {/* } */}
    </div>

  )
  };




export default Comments;