const router = require('express').Router({mergeParams:true});
const dogController = require("../controllers/dog.controller");
const auth = require('../middlewares/auth');


// Create Dog by User ID with auth
/*
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
*/
// Get Dog by ID

router.get ('/:id', async (req, res) => {
  try {

    const id = req.params.id;
    const dog = await dogController.findDog(id);
    const user_Id = dog.user_Id;
    const name = dog.name;
    const gender = dog.gender;
    const breed = dog.breed;
    const size = dog.size;
    const age = dog.age;
    const description = dog.description;

    res.json({user_Id, name, gender, breed, size, age, description})

  }catch (err) {
    return res.status(500).json({
      message: err.message
    });
  };
});


// Index All Dogs

router.get ('/', async (req,res) => {
  try{
    res.json(await dogController.indexAll());
  }catch(error){
    res.status(500).json({
      error: 'error',
      message: 'error'
    });
  };
});

// Update Dog Profile by ID (No auth)

router.put('/:id', async (req, res) => {
  try{
    const body = req.body;
    res.json(await dogController.updateDogProfile(body, req.params.id));
  }catch(err){
    return res.status(500).json({
      message: err.message
    });
  };
});

// Delete Dog by ID

router.delete('/:id', async (req, res) => {
  try{
    res.json(await dogController.deleteDog(req.params.id));
  }catch(err){
    res.status(500).json({
      message: err.message
    });
  };
});

// Create dog (Trabajando)
router.post('/',async (req,res) => {
  try{
      const uid = req.params.id;
      req.body.user_Id = uid;
      res.json(await dogController.create(req.body));
  } catch(error) {
      res.status(500).json({message:error.message});
  }
});

module.exports = router;