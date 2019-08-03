const express = require('express');
const {
  createReview,
  getAllReviews,
  updateReview,
  deleteReview
} = require('../controllers/reviewController');
const { protect, restrictTo } = require('../controllers/authController');

const router = express.Router({ mergeParams: true });

router
  .route('/')
  .get(getAllReviews)
  .post(protect, restrictTo('user'), createReview);

router
  .route('/:id')
  .patch(updateReview)
  .delete(deleteReview);

module.exports = router;
