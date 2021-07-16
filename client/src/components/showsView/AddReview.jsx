import React from 'react';
import { TextField, Button } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import styles from './addreview.module.scss';

class AddReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show_rating: 0,
      text: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleRatingChange = this.handleRatingChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState({ text: e.target.value });
  }

  handleRatingChange(newValue) {
    this.setState({ show_rating: newValue });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleAddNewReview({
      show_id: this.props.id,
      user_id: this.props.userId,
      show_rating: this.state.show_rating,
      text: this.state.text,
    });
    this.setState({
      show_rating: 0,
      text: '',
    });
  }

  render() {
    return (
      <div className={styles.addReviewContainer}>
        <TextField
          label="Write Review"
          id="text"
          value={this.state.text}
          required
          multiline
          rows={6}
          onChange={(e) => {
            this.handleInputChange(e);
          }}
        />
        <div className={styles.ratingContainer}>
          <span className={styles.rating}> Rate the show</span>
          <Rating
            id="show_rating"
            value={this.state.show_rating}
            onChange={(e, newValue) => {
              this.handleRatingChange(newValue);
            }}
          />
        </div>
        <Button onClick={this.handleSubmit}>Submit</Button>
      </div>
    );
  }
}
export default AddReview;
