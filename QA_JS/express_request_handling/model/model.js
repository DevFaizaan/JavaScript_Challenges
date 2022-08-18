/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
/* eslint-disable linebreak-style */
/* eslint-disable import/newline-after-import */
/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prefer-destructuring */
const mongoose = require('mongoose');
const connectDB = require('../db');
mongoose.connect('mongodb://localhost:27017/QA', {
  useNewUrlParser: true,
});

const productSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
      unique: true,
    },
    cost: {
      type: Number,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('product', productSchema);
