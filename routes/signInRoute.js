var expres =require("express"),
    router = expres.Router(),
    controller =require("../controller/signInController"),
    cc = new controller();
console.log("This is router");
router.post("/",cc.post.bind(cc));
module.exports = router;