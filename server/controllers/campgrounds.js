const Campground = require("../models/campground");

const allCampgrounds = async (req, res) => {
  const campgrounds = await Campground.find({});
  res.status(200).json(campgrounds);
};

//create a campground
const createCampground = async (req, res) => {
  const { title, location, description, image } = req.body;
  try {
    const campground = await Campground.create({
      title,
      location,
      description,
      image,
    });
    res.status(201).json(campground);

    // campground.author = req.user._id;
  } catch (e) {
    res.status(401).json({ error: "Something went wrong" });
  }
};

//get single campground by id
const showCampground = async (req, res) => {
  const campground = await Campground.findById(req.params.id);
  if (!campground) {
    res.status(401).json({ error: "Campground not found" });
  }
  res.status(200).json({ campground });
};

const updateCampground = async (req, res) => {
  const { id } = req.params;

  try {
    const campground = await Campground.findByIdAndUpdate(id, {
      ...req.body,
    });

    res.status(200).json({ campground });
  } catch (error) {
    res.status(401).json({ error: "Cannot update site" });
  }
};

const deleteCampground = async (req, res) => {
  const { id } = req.params;

  try {
    const campground = await Campground.findByIdAndDelete(id);
    res.status(200).json({ campground });
  } catch (error) {
    res.status(401).json({ error: "Campground not found" });
  }
};

module.exports = {
  allCampgrounds,
  createCampground,
  showCampground,
  updateCampground,
  deleteCampground,
};
