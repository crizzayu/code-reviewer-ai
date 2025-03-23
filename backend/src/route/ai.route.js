const express = require('express');
const aicontroller = require("../controllers/ai.controllers")
const router = express.Router();

router.post("/get-review", aicontroller.getReview)

module.exports = router;