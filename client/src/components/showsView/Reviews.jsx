
import React from 'react';
import Review from './Review.jsx';
import axios from 'axios';

class Reviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: [],
    };

  }




  // componentDidMount() {
  //   this.getReviews();
  // }


  render() {
    return (
<div>
      <h1> Reviews  </h1>

  {this.props.reviews.map(review =>
    <Review reviewData ={review} comments={this.props.comments}/>
  )}
</div>

    );




  }
}
export default Reviews;







