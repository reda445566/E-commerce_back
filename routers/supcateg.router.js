const express = require("express");

const { createsupcateg } = require("../controllers/supcateg.controller");

const {
  createSubCategoryValidator
} = require("../validators/subcateg.validator");

const router = express.Router();

router.post(
  "/",
  createSubCategoryValidator,
  createsupcateg
);

module.exports = router;




