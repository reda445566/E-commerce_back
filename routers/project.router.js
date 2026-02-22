const express = require("express");
const router = express.Router();
const {
  createUser,
  getUsers,
} = require("../controllers/project.controller")

router.post("/", createUser);
router.get("/", getUsers);

module.exports = router;