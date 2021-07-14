import React from "react";
import Comments from './Comments.jsx';

//ADD A REVIEW


const Review = ({data}, {comments}) => {
return
  <div>
    {/* <h1> Show Info
    {data.title} {data.rating} {data.street}
    {data.city} {data.zip} {data.state} {data.date} {data.website}
    {data.description} {data.photo} {data["cast"]}

    </h1> */}

<div class='reviewBox'>

  <p class = 'reviewUsername'>  {data.username} </p>
  <p class = 'reviewDate'>  {data.date} </p>
  <p class = 'reviewShowRateing'>  {data.showRating} </p>

      <div class='reviewTextBox'>

              <p class = 'reviewText'> {data.reviewText} </p>
        </div>
  <p class = 'reviewRating'> {data.reviewRating} </p>
</div>



<Comments comments = {comments}/>

  </div>
};

export default Review;