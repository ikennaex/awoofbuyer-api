const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProductSchema = new Schema(
  {
    // userid: { type: String, required: true },
    name: { type: String, required: true },
    desc: { type: String, required: true },
    imgUrl: { type: [String], required: true },

    price: { type: Number, required: true, min: [0] }, //this means proce cannot be less than zero
    category:  {
        type: mongoose.Schema.Types.ObjectId,
        ref: "CategoryModel", // Reference to a Category model
        required: true,
      },
    vendor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to a Vendor (User model)
      required: true, 
    },
  },
  { timestamps: true }
); 

const ProductModel = mongoose.model("Product", ProductSchema)

module.exports = ProductModel;