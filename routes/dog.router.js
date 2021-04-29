const router = require('express').Router({mergeParams:true});
const dogController = require("../controllers/dog.controller");

router.post ('/', async (req,res) => {
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