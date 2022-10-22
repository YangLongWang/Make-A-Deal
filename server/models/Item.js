const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const itemSchema = new Schema(
  {
    itemName: {
      type: String,
      required: true,
      trim: true,
    },
    postedAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
    itemDesc: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    itemPrice: {
      type: Number,
      min: 0.99,
      required: true,
    },
    itemImage: {
      type: String,
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Item = model("Item", itemSchema);

module.exports = Item;
