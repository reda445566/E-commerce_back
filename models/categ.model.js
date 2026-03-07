const mongoose = require('mongoose');

// 1- Create Schema
const categSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Category required'],
      unique: [true, 'Category must be unique'],
      minlength: [3, 'Too short category name'],
      maxlength: [32, 'Too long category name'],
    },

    // A and B => shopping.com/a-and-b
    slug: {
      type: String,
      lowercase: true,
    },

    image: {
      type: String,
    },
  },
  { timestamps: true }
);

// 2- Create Model
const CategModel = mongoose.model('Categ', categSchema);

module.exports = CategModel;



