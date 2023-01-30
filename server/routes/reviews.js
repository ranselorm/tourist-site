const express = require("express");
const router = express.Router({ mergeParams: true });
const Campground = require("../models/campground");
const Review = require("../models/review");
const { reviewSchema } = require("../schemas");
const { isLoggedIn, validateReview, isReviewAuthor } = require("../middleware");
const reviews = require("../controllers/reviews");

//---------------------------------------------------------

router.post(
  "/",

  reviews.createReview
);

router.delete("/:reviewId", reviews.deleteReview);

module.exports = router;
