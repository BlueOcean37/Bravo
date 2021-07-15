
import React from 'react';
import Review from './Review.jsx';
import axios from 'axios';
import ReviewCard from '../commons/ReviewCard';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      id:"",
      downvote:"",
      upvote:""
    };
  }

  // componentDidMount() {
  //   this.getReviews();
  // }


  render() {
    if (this.props.reviewData ) {
    return (
    <div>
      <h1> Reviews  </h1>
 {this.props.reviewData ? this.props.reviewData.map(review => {
   console.log(review)
 return (
   <ReviewCard user_photo={review.photo} username={review.username} date={review.date} text={review.text} rating={review.rating} title={this.props.showInfo.showTitle} location={`${this.props.showInfo.showCity}, ${this.props.showInfo.showState}`} comments={review.comments}
   />
    // <Review reviewData ={review} comments={this.props.comments}/>
 )}) : null
  }

  </div>

    );
}




  }
}
export default Reviews;







