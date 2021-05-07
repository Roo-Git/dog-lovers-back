const router = require('express').Router({mergeParams:true});
const confirmationController = require('../controllers/confirmation.controller');

// CONFIRMATION ENDOPOINTS


// Create Confirmation
router.post('/', async (req,res) => {
  try {
    res.json (await confirmationController.createConfirmation(req.body));

  } catch (error) {
    res.status(500).json({
      error: 'error',
      message: 'error'
    });
  };
});

// Get Confirmation by ID
router.get ('/:id', async (req, res) => {
  try {

    const id = req.params.id;
    const confirmation = await confirmationController.findConfirmation(id);
    const confirmationByOwner = confirmation.confirmationByOwner
    const dog_Id = confirmation.dog_Id;
    const candidate_Id = confirmation.candidate_Id;
    const user_Id = confirmation.user_Id;

    res.json({confirmationByOwner, dog_Id, candidate_Id, user_Id})

  }catch (err) {
    return res.status(500).json({
      message: err.message
    });
  };
});

// Get All Confirmations
router.get ('/', async (req,res) => {
  try{
    res.json(await confirmationController.indexAll());
  }catch(error){
    res.status(500).json({
      error: 'error',
      message: 'error'
    });
  };
});


// Update Confirmation
router.put('/:id', async (req, res) => {
  try{
    const body = req.body;
    res.json(await confirmationController.updateConfirmation(body, req.params.id));
  }catch(err){
    return res.status(500).json({
      message: err.message
    });
  };
});

// Delete Confirmation by ID
router.delete('/:id', async (req, res) => {
  try{
    res.json(await confirmationController.deleteConfirmation(req.params.id));
  }catch(err){
    res.status(500).json({
      message: err.message
    });
  };
});

module.exports = router;