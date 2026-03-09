const { body, param } = require("express-validator");

// create categ validation 
exports.createcategValidation = [
    body("name")
        .notEmpty()
        .withMessage("Category name is required")
        .isLength({ min: 3 })
        .withMessage("Too short category name")
        .isLength({ max: 32 })
        .withMessage("Too long category name")
];

//  get categbyId
exports.getCategoryValidator = [
    param("id")
        .isMongoId()
        .withMessage("Invalid category id")
];

// delete categ 
exports.deleteCategoryValidator = [
    param("id")
        .isMongoId()
        .withMessage("Invalid category id"),
];


