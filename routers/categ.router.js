const express = require("express");

const {createcateg,getcateg,getcategbyid,deletecateg} = require("../controllers/categ.controller");

const router = express.Router();

router.post("/create",createcateg);
router.get("/get",getcateg);
router.get("/:id", getcategbyid);
router.delete("/:id", deletecateg)

module.exports = router;
