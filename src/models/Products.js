const { Schema, model } = require("mongoose");

const productSchema = new Schema(
  {
    name: String,
    categories: Array,
    minUnitPurchase: Number,

    box: Object,
    halfBox: Object,

    flavors: Array,
    thumbnailURL: String,
    glassContainer: Boolean,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Product", productSchema);
