
import React from 'react';
import Review from './Review.jsx';
import axios from 'axios';

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
 return (
    <Review reviewData ={review} comments={this.props.comments}/>
 )}) : null
  }

</div>

    );
}




  }
}
export default Reviews;







