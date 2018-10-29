var expres =require("express"),
    router = expres.Router(),
    controller =require("../controller/signUpController"),
    cc = new controller();
console.log("This is router");
router.post("/",cc.post.bind(cc));
router.get("/", cc.get.bind(cc))
module.exports = router;