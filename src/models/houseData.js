import mongoose from "./index.js";

const houseDataSchema = new mongoose.Schema(
  {
    img: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    luxuryType: {
      type: String,
      required: true,
    },
    bedrooms: {
      type: Number,
      required: true,
    },
    bathrooms: {
      type: Number,
      required: true,
    },
    area: {
      type: Number,
      required: true,
    },
    yearBuilt: {
      type: Number,
      required: true,
    },
    amenities: {
      type: [String],
      required: false,
    },
  },
  {
    collection: "houseData",
    versionKey: false,
  }
);

const houseDataModel = mongoose.model("houseData", houseDataSchema);

export default houseDataModel;
