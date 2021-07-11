// reviews main index, import all reviews controller here

const getAllReviews = require('./getAllReviews');
const upVoteReview = require('./upVoteReview');
const downVoteReview = require('./downVoteReview');

module.exports = {
  getAllReviews,
  upVoteReview,
  downVoteReview,
};
