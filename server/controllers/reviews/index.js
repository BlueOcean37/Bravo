// reviews main index, import all reviews controller here

const getAllReviews = require("./getAllReviews");
const addReview = require("./addReview");
const upVoteReview = require("./upVoteReview");
const downVoteReview = require("./downVoteReview");
const getComments = require("./getComments");
const addComment = require("./addComment");
const getReviewsByUser = require("./getReviewsByUser");
const getReviewsByShow = require("./getReviewsByShow");

module.exports = {
  getAllReviews,
  addReview,
  upVoteReview,
  downVoteReview,
  getComments,
  addComment,
  getReviewsByUser,
  getReviewsByShow,
};
