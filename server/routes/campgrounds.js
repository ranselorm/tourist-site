const express = require("express");
const router = express.Router();
// const { isLoggedIn, isAuthor, validateCampground } = require("../middleware");

const campgrounds = require("../controllers/campgrounds");
const {
  allCampgrounds,
  createCampground,
  showCampground,
  updateCampground,
  deleteCampground,
} = require("../controllers/campgrounds");

//get all campgrounds
router.get("/", allCampgrounds);

//get a single campground
router.get("/:id", showCampground);

//create a new campground
router.post("/", createCampground);

//update a campground
router.patch("/:id", updateCampground);

//delete a campground
router.delete("/:id", deleteCampground);

// router
//   .route("/:id")
//   .get(catchAsync(campgrounds.showCampground))
//   .put(
//     isLoggedIn,
//     isAuthor,
//     validateCampground,
//     catchAsync(campgrounds.updateCampground)
//   )

//   .delete(isLoggedIn, isAuthor, catchAsync(campgrounds.deleteCampground));

// router.get(
//   "/:id/edit",
//   isLoggedIn,
//   isAuthor,
//   catchAsync(campgrounds.renderEditForm)
// );

module.exports = router;
