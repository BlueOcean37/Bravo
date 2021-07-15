import React from "react";
import Comments from './Comments.jsx';

//ADD A REVIEW
// class Review extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {

//       id:"",
//       downvote:"",
//       upvote:"",
//       comments:[],
//       rating:""
//     };

//   }

//   render() {

//   }
// }

const Review = ({reviewData}, {comments}, {handleUpVote}, {handleDownVote}) => {
return (
  <div>
    {/* <h1> Show Info
    {data.title} {data.rating} {data.street}
    {data.city} {data.zip} {data.state} {data.date} {data.website}
    {data.description} {data.photo} {data["cast"]}

    </h1> */}

<div class='reviewBox'>

  <p class = 'reviewUsername'> Username: {reviewData.username} </p>
  <p class = 'reviewDate'> Date: {reviewData.date} </p>
  <p class = 'reviewShowRateing'> User Show Rating: {reviewData.show_rating} </p>

      <div class='reviewTextBox'>

              <p class = 'reviewText'> {reviewData.text} </p>
        </div>
  <p class = 'reviewRating'> Review Rating: {reviewData.rating} </p>
</div>
<button class = 'addComment'> Reply </button>
<button class = 'likeReview'
   onClick={(e) => handleUpVote(reviewData.id)}> Like </button>
<button class = 'dislikeReview'
   onClick={(e) => handleDownVote(reviewData.id)}> Dislike </button>
<Comments comments = {reviewData.comments}/>

  </div>
)
};

export default Review;