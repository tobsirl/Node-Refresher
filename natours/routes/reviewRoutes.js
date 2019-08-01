const express = require('express');
const {
  createReview,
  getAllReviews
} = require('../controllers/reviewController');

const router = express.Router();

router
  .route('/')
  .get(getAllReviews)
  .post(createReview);

module.exports = router;
