import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ShowInfo from './ShowInfo.jsx';
import Reviews from './Reviews.jsx';
import AddReview from './AddReview.jsx';

class Shows extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],

      showInfo: {},
    };
    this.getReviews = this.getReviews.bind(this);
    this.handleAddNewReview = this.handleAddNewReview.bind(this);
  }

  getReviews() {
    axios
      .get(`/api/shows/${this.props.location.state}`)
      .then(({ data }) => {
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

  handleAddNewReview(reviewData) {
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
      </div>
    );
  }
}

export default Shows;
