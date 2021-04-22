const router = require('express').Router({mergeParams:true});
const userController = require("../controllers/user.controller");
const jwt = require('jsonwebtoken');


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

// User Login

router.post('/login', async (req,res) => {
    try {
      const {email, password} = req.body;
      const jwt = await userController.login(email, password);
      res.json({
        email: email,
        token:jwt
      })
    }catch(error){
        res.status(401).json({
          message: error.message
        });
  };
})


module.exports = router;