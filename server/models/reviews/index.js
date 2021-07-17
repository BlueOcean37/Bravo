const insertComment = require("./insertComment");
const insertReview = require("./insertReview");
const updateReviewDownVote = require("./updateReviewDownVote");
const updateReviewUpVote = require("./updateReviewUpVote");
const selectAllReviews = require("./selectAllReviews");
const selectComments = require("./selectComments");
const selectReviewsByUser = require("./selectReviewsByUser");
const selectReviewsByShow = require("./selectReviewsByShow");

module.exports = {
  insertComment,
  insertReview,
  updateReviewDownVote,
  updateReviewUpVote,
  selectAllReviews,
  selectComments,
  selectReviewsByUser,
  selectReviewsByShow,
};
