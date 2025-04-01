const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const userController = require("../controllers/users.js");

router
  .route("/signup")
  //render signup form
  .get(userController.renderSignupForm)
  //signup
  .post(wrapAsync(userController.signup));

router
  .route("/login")
  //render login form
  .get(userController.renderLoginForm)
  //Log In
  .post(
    saveRedirectUrl,
    passport.authenticate("local", {
      failureRedirect: "/login",
      failureFlash: "/login",
    }),
    userController.login
  );

//Log Out
router.get("/logout", userController.logout);

module.exports = router;
