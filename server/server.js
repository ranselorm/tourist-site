if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();

const mongoose = require("mongoose");

//schemas
const Review = require("./models/review");
const User = require("./models/userModel");

const campgroundRoutes = require("./routes/campgrounds");
const userRoutes = require("./routes/users");
const reviewRoutes = require("./routes/reviews");

const uri = process.env.MONGODB_URI;
mongoose.connect("mongodb://localhost:27017/yelpCamp");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//----------------------------------------------------------------------------------------------

//routes
app.use("/api/campgrounds", campgroundRoutes);
app.use("/api/user", userRoutes);
app.use("/campgrounds/:id/reviews", reviewRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Our app is running on port ${PORT}`);
});
