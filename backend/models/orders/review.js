const mongoose = require("mongoose");
require("dotenv").config();

const conn = mongoose.createConnection(process.env.ATLAS_URI + "orders");

const WorkerReview = new mongoose.Schema(
  {
    uid: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    review: {
      type: String,
      required: true,
    },
    rating: {
      type: String,
      required: true,
    },
  },
  {
    collection: "review",
  }
);

const Reviews = conn.model("WorkerReview", WorkerReview);

module.exports = Reviews;
