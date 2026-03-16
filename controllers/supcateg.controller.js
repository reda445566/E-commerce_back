const supCategModel = require("../models/subcategModel");
const slugify = require("slugify");
const asyncHandler = require("express-async-handler");
const ApiError = require("../utils/ApiError");
const subcategModel = require("../models/subcategModel");

// createsupcateg
exports.createsupcateg = asyncHandler(async (req, res,next) => {
  const { name, category } = req.body;
  const supcateg = await supCategModel.create({
    name,
    slug: slugify(name),
    category,
  });
    res.status(201).json({ data: supcateg });
});

// getsubcateg

exports.getsubcateg = asyncHandler(async(req,res)=>{
  const page = req.query.page * 1 || 1;
  const limit = req.query.limit * 1 || 5;
  const skip = (page - 1) * limit;
  const supcateg = await subcategModel.find({})
      .skip(skip)
    .limit(limit);
    
  res.status(200).json({
    success: true,
    results: category.length,
    page,
    data: category
  });
  
})














