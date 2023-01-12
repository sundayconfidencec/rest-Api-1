

const express = require("express");
const router = express.Router();
const {createBookController,updateBookController,deleteBookController} = require("../myControllers/book");


router.post("/mybook", createBookController);
router.put("/mybook", updateBookController);
router.delete("/mybook", deleteBookController);

module.exports = router;







