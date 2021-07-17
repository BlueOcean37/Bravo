const insertComment = require('./insertComment');
const insertReview = require('./insertReview');
const updateReviewDownVote = require('./updateReviewDownVote');
const selectAllReviews = require('./selectAllReviews');
const selectComments = require('./selectComments');
const selectReviewsByUser = require('./selectReviewsByUser');

module.exports = {
  insertComment,
  insertReview,
  updateReviewDownVote,
  selectAllReviews,
  selectComments,
  selectReviewsByUser,
};
