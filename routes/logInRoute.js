var expres =require("express"),
    router = expres.Router(),
    controller =require("../controller/logInController"),
cc = new controller();
console.log("This is router");
router.post("/",cc.post.bind(cc));
//router.get("/",cc.get.bind(cc));
router.delete("/:id",cc.delete.bind(cc));
router.put("/:id",cc.put.bind(cc));
module.exports = router;