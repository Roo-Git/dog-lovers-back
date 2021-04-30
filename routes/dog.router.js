const router = require('express').Router({mergeParams:true});
const dogController = require("../controllers/dog.controller");
const auth = require('../middlewares/auth');

router.post ('/:id' , auth, async (req,res) => {
  try{
    const user = req.params.user_Id
    res.json(await dogController.createDog(req.body, user,));
  }catch(error){
    console.log(error);
    res.status(500).json({
      error: 'error',
      message: 'error'
    });
  };
});

module.exports = router;