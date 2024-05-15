const express = require("express");
const passport = require("passport");

const router = express.Router();

const successLoginUrl = "http://localhost:5173";
const errorLoginUrl = "http://localhost:5173/login/error";

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", { 
    successRedirect : successLoginUrl ,
    failureRedirect : errorLoginUrl
  }),
  
);
router.get("/user",(req, res) => {
  if(!req.session.passport){
  	return res.status(401).send("not authorized")
  }
  res.status(201).json(req.session.passport.user);
});
router.get('/logout', (req, res) => {

  if (req.session) {
    req.session = null; // Clear session data
    res.clearCookie('session'); // Clear the session cookie
    return res.json({ msg: 'logging you out' });
  } else {
    return res.json({ msg: 'no user to log out!' });
  }
});
module.exports = router;
