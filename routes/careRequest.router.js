const router = require('express').Router({mergeParams:true});
const careRequestController = require('../controllers/careRequest.controller');

// REQUEST ENDOPOINTS

// Create Request


router.post('/:id', async (req,res) => {
  try {
    const owner = req.params.owner_Id 
    const dog = req.params.dog_Id
    res.json (await careRequestController.createRequest(req.body, owner, dog));

  } catch (error) {
    res.status(500).json({
      error: 'error',
      message: 'error'
    });
  };
})

module.exports = router;