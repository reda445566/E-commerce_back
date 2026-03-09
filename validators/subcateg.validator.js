const { body, param } = require("express-validator");
const validatorMiddleware = require("../middleware/validatorMiddleware");

// create subCategory validation
exports.createSubCategoryValidator = [
  body("name")
    .notEmpty()
    .withMessage("SubCategory name is required")
    .isLength({ min: 2 })
    .withMessage("Too short SubCategory name")
    .isLength({ max: 32 })
    .withMessage("Too long SubCategory name"),

  body("category")
    .notEmpty()
    .withMessage("SubCategory must belong to parent category")
    .isMongoId()
    .withMessage("Invalid category id format"),

  validatorMiddleware,
];


// get subCategory by id
exports.getSubCategoryValidator = [
  param("id")
    .isMongoId()
    .withMessage("Invalid SubCategory id format"),

  validatorMiddleware,
];


// update subCategory
exports.updateSubCategoryValidator = [
  param("id")
    .isMongoId()
    .withMessage("Invalid SubCategory id format"),

  body("name")
    .optional()
    .isLength({ min: 2 })
    .withMessage("Too short SubCategory name")
    .isLength({ max: 32 })
    .withMessage("Too long SubCategory name"),

  body("category")
    .optional()
    .isMongoId()
    .withMessage("Invalid category id format"),

  validatorMiddleware,
];


// delete subCategory
exports.deleteSubCategoryValidator = [
  param("id")
    .isMongoId()
    .withMessage("Invalid SubCategory id format"),

  validatorMiddleware,
];

