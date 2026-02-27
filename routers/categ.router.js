const express = require("express");

const {createcateg,getcateg,getcategbyid} = require("../controllers/categ.controller");

const router = express.Router();

router.post("/create",createcateg);
router.get("/get",getcateg);
router.get("/:id", getcategbyid);

module.exports = router;





