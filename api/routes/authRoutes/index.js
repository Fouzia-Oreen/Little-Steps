const express = require("express");
const { registerUser } = require("../../controllers/auth-controller/index.js");

router.post("/register", registerUser);

module.exports = router;