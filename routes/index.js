console.log("vamsi");
var express = require("express");
var router = express.Router();
router.get("/",function (req, res,next) {
    res.send("This is Vamsi and Naveen First Version");
});
router.use("/request",require("./logInRoute"));
router.use("/signUp",require("./signUpRoute"));
router.use("/signIn",require("./signInRoute"));

module.exports = router;