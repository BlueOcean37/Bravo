// reviews main index, import all reviews controller here

const getAllReviews = require('./getAllReviews');
const upVoteReview = require('./upVoteReview');
const downVoteReview = require('./downVoteReview');
const addComment = require('./addComment');

module.exports = {
  getAllReviews,
  upVoteReview,
  downVoteReview,
  addComment,
};
