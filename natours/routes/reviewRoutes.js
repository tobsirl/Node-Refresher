const express = require('express');
const {
  createReview,
  getAllReviews,
  updateReview,
  deleteReview,
  setTourUserIds
} = require('../controllers/reviewController');
const { protect, restrictTo } = require('../controllers/authController');

const router = express.Router({ mergeParams: true });

router
  .route('/')
  .get(getAllReviews)
  .post(protect, restrictTo('user'), setTourUserIds, createReview);

router
  .route('/:id')
  .patch(updateReview)
  .delete(deleteReview);

module.exports = router;
