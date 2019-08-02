const express = require('express');
const {
  aliasTopTours,
  getTourStats,
  getMonthlyPlan,
  getAllTours,
  createTour,
  getTour,
  updateTour,
  deleteTour
} = require('./../controllers/tourController');

const { createReview } = require('../controllers/reviewController');

const { protect, restrictTo } = require('../controllers/authController');

const router = express.Router();

router.route('/top-5-cheap').get(aliasTopTours, getAllTours);

router.route('/tour-stats').get(getTourStats);
router.route('/monthly-plan/:year').get(getMonthlyPlan);

router
  .route('/')
  .get(protect, getAllTours)
  .post(createTour);

router
  .route('/:id')
  .get(getTour)
  .patch(updateTour)
  .delete(protect, restrictTo('admin', 'lead-guide'), deleteTour);

router
  .route('/:tourId/reviews')
  .post(protect, restrictTo('users', createReview));

module.exports = router;
