import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ShowInfo from './ShowInfo.jsx';
import Reviews from './Reviews.jsx';
import AddReview from './AddReview.jsx';
// import AddComment from './AddComment.jsx';

class Shows extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],

      showInfo: {},
    };
    // console.log('THIS IS PROPS', this.props);
    // console.log("THIS IS REVIEWS RESPONSE", this.state.reviews);
    this.getReviews = this.getReviews.bind(this);
    this.handleAddNewReview = this.handleAddNewReview.bind(this);
    // this.handleAddNewComment = this.handleAddNewComment.bind(this);
  }
  // ${this.props.location.state}
  getReviews() {
    axios
      .get(`/api/shows/3`)
      .then(({ data }) => {
        // console.log("THIS IS DATA RESPONSE", data);
        // console.log("THIS IS REVIEWS RESPONSE", data[0].reviews);
        console.log('THIS IS SHOW INFO', data[0].title);
        this.setState({
          reviews: data[0].reviews,
          showInfo: {
            id: data[0].id,
            user_id: data[0].user_id,
            showTitle: data[0].title,
            showPhoto: data[0].photo,
            showDate: data[0].date,
            showWebsite: data[0].website,
            showDescription: data[0].description,
            showCast: data[0].cast,
            showStreet: data[0].street,
            showCity: data[0].city,
            showZip: data[0].zip,
            showState: data[0].state,
            showRating: data[0].rating,
          },
        });
      })
      .catch((err) => console.log(err));
  }

  // handleAddNewComment(commentData) {
  //   console.log('THIS IS REVIEW ID', this.props.review_id);
  //   axios
  //     .post(`/api/reviews/${this.props.review_id}/comment`, {
  //       id: this.props.review_id,
  //       user_id: commentData.user_id,
  //       text: commentData.text,
  //     })
  //     .then((response) => {
  //       console.log('THIS IS RESPONSE WITH NEW REVIEW', response);
  //     })
  //     .catch((error) => {
  //       console.log('THIS IS RESPONSE WITH NEW review', error);
  //     })
  //     .then(() => this.getReviews());
  // }

  handleAddNewReview(reviewData) {
    // console.log("THIS IS NEW REVIEW", state)
    // console.log("THIS IS NUMBER OF REVIEWS", this.state.reviews.length + 1);
    // console.log("THIS IS NAME OF NEW REVIEW", newstate.name);
    axios
      .post('/api/reviews', {
        show_id: reviewData.show_id,
        user_id: reviewData.user_id,
        show_rating: reviewData.show_rating,
        text: reviewData.text,
      })
      .then((response) => {
        console.log('THIS IS RESPONSE WITH NEW REVIEW', response);
      })
      .catch((error) => {
        console.log('THIS IS RESPONSE WITH NEW review', error);
      })
      .then(() => this.getReviews());
  }

  componentDidMount() {
    this.getReviews();
  }

  render() {
    // if (this.state) {
    // (
    return (
      <div>
        {console.log('THIS IS STATE', this.state)}
        <ShowInfo showData={this.state.showInfo} />
        <AddReview
          handleAddNewReview={this.handleAddNewReview}
          userId={this.state.showInfo.user_id}
          id={this.state.showInfo.id}
        />
        <Reviews reviewData={this.state.reviews} showInfo={this.state.showInfo} />

        {/* <AddComment
            user_id={this.state.showInfo.user_id}
            // showInfo={this.state.showInfo}
            handleAddNewComment={this.handleAddNewComment}
          /> */}
      </div>
    );
    // } else {
    //   return null;
    // }
  }
}

export default Shows;
