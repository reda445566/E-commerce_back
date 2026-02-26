const express = require("express");

const {createcateg,getcateg} = require("../controllers/categ.controller");

const router = express.Router();

router.post("/create",createcateg);
router.get("/get",getcateg);

module.exports = router;
