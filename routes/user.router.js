const router = require('express').Router({mergeParams:true});
const userController = require("../controllers/user.controller");
const jwt = require('jsonwebtoken');


// USER ENDPOINTS


// Register
router.post('/', async (req,res) => {
    try{
      res.json(await userController.signUp(req.body));
    }catch(error){
      res.status(500).json({
        error: 'error',
        message: 'The user could not be registered'
      })
  };
});


// Login
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


// Logout

router.get('/logout/:id', async (req, res) => {
    try{
      const id = req.params.id;
      const user = await userController.logout(id);
      const status = `See you soon, ${user.firstName}`;

      res.json({status, id, date:new Date});
    }catch (error){
        res.status(401).json({
        message: error.message
        });
    };
});


// Index All Users
router.get ('/', async (req,res) => {
    try{
      res.json(await userController.indexAll());
    }catch(error){
      res.status(500).json({
        error: 'error',
        message: 'error'
      });
    };
});


// Get User Profile by Id
router.get ('/:id', async (req, res) => {
    try {

      const id = req.params.id;
      const user = await userController.findUser(id);
      const username = user.username;
      const email = user.email;
      const firstName = user.firstName;
      const lastName = user.lastName;
      const phone = user.phone;
      const address = user.address;
      const description = user.description;
    
      res.json({username, email, firstName, lastName, phone, address, description})

    }catch (err) {
      return res.status(500).json({
        message: err.message
      });
    };
});


// Update User Profile (No password)
router.put('/:id', async (req, res) => {
    try{
      const body = req.body;
      res.json(await userController.updateUserProfile(body, req.params.id));
    }catch(err){
      return res.status(500).json({
        message: err.message
      });
    };
});


// Delete User
router.delete('/:id', async (req, res) => {
    try{
      res.json(await userController.deleteUser(req.params.id));
    }catch(err){
      res.status(500).json({
        message: err.message
      });
    };
});


module.exports = router;