const express = require("express");

const {
    createcateg,
    getcateg,
    getcategbyid,
    deletecateg
} = require("../controllers/categ.controller");

const {
    createcategValidation,
    getCategoryValidator,
    deleteCategoryValidator
} = require("../validators/categ.validator");

const validatorMiddleware = require('../middleware/validatorMiddleware');

const router = express.Router();

// إنشاء تصنيف جديد
router.post(
    "/create",
    createcategValidation,
    validatorMiddleware,
    createcateg
);

// جلب كل التصنيفات
router.get("/get", getcateg);

// جلب تصنيف حسب الـ id
router.get(
    "/:id",
    getCategoryValidator,
    validatorMiddleware,
    getcategbyid
);

// حذف تصنيف حسب الـ id
router.delete(
    "/:id",
    deleteCategoryValidator,
    validatorMiddleware,
    deletecateg
);

module.exports = router;

