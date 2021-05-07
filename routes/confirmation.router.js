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


// Get All Confirmations


// Update Confirmation


// Delete Confirmation by ID


module.exports = router;