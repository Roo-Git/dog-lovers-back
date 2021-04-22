const router = require('express').Router({mergeParams:true});

const userController = require("../controllers/user.controller");


// USER ENDPOINTS


// User Register

router.post('/', async (req,res) => {
  try{
    res.json(await userController.createUser(req.body));
  }catch(error){
    res.status(500).json({
      error: 'error',
      message: 'The user could not be registered'
    })
  };
});

module.exports = router;