const CategModel = require("../models/categ.model");
const slugify = require("slugify");
const asyncHandler = require("express-async-handler");
const ApiError = require("../utils/ApiError");

//getall
exports.getcateg = asyncHandler(async (req, res) => {

  const page = req.query.page * 1 || 1;
  const limit = req.query.limit * 1 || 5;
  const skip = (page - 1) * limit;

  const category = await CategModel.find({})
    .skip(skip)
    .limit(limit);

  res.status(200).json({
    success: true,
    results: category.length,
    page,
    data: category
  });
});

//get
exports.getcategbyid = asyncHandler(async (req, res, next) => {

  const { id } = req.params;

  const categid = await CategModel.findById(id);

  if (!categid) {
    return next(new ApiError("Category not found", 404));
  }

  res.status(200).json({
    success: true,
    data: categid
  });
});

//create categ
exports.createcateg = asyncHandler(async (req, res) => {

  const { name } = req.body;

  if (!name) {
    throw new ApiError("Category name is required", 400);
  }

  const category = await CategModel.create({
    name,
    slug: slugify(name)
  });

  res.status(201).json({
    success: true,
    data: category
  });
});

//delete
exports.deletecateg = asyncHandler(async (req, res, next) => {

  const { id } = req.params;

  const categ = await CategModel.findByIdAndDelete(id);

  if (!categ) {
    return next(new ApiError("Category not found", 404));
  }

  res.status(200).json({
    success: true,
    message: "Category deleted successfully",
    data: categ
  });
});


