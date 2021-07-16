import React from 'react';
import axios from 'axios';
import ShowInfo from './ShowInfo';
import Reviews from './Reviews';
import AddReview from './AddReview';
import styles from './shows.module.scss';

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

  componentDidMount() {
    this.getReviews();
  }

  handleAddNewReview(reviewData) {
    axios
      .post('/api/reviews', {
        show_id: reviewData.show_id,
        user_id: 13,
        show_rating: reviewData.show_rating,
        text: reviewData.text,
      })
      .then(() => this.getReviews())
      .catch((error) => {
        console.error('error adding new review', error);
      });
  }

  getReviews() {
    axios
      .get(`/api/shows/${this.props.location.state}`)
      .then(({ data }) => {
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
  render() {
    return (
      <div className={styles.container}>
        <ShowInfo showData={this.state.showInfo} />
        <div className={styles.reviewsContainer}>
          <AddReview
            handleAddNewReview={this.handleAddNewReview}
            userId={13}
            id={this.state.showInfo.id}
          />
          <Reviews reviewData={this.state.reviews} showInfo={this.state.showInfo} />
        </div>
      </div>
    );
  }
}

export default Shows;
