const express = require("express");
const router = express.Router();
const authenticationMiddleware = require("../middleware/auth");
const {
  getAllQuestions,
  postQuestion,
  getCategoryQuestions,
  getAllQuestionsStatic,
  login,
  userData,
  register,
} = require("../controllers/questions");

router.route("/").get(getAllQuestions).post(postQuestion);
router.route("/login").post(login);
router.route("/register").post(register);
router.route("/rtsn").get(authenticationMiddleware, userData);
router.route("/static").get(getAllQuestionsStatic);
module.exports = router;
