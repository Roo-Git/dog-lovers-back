const router = require('express').Router({mergeParams:true});
const careRequestController = require('../controllers/careRequest.controller');

// REQUEST ENDOPOINTS


// Create Request

router.post('/', async (req,res) => {
  try {
    res.json (await careRequestController.createRequest(req.body));

  } catch (error) {
    res.status(500).json({
      error: 'error',
      message: 'error'
    });
  };
});

// Get Request by ID

router.get ('/:id', async (req, res) => {
  try {

    const id = req.params.id;
    const request = await careRequestController.findRequest(id);
    const owner_Id = request.owner_Id;
    const dog_Id = request.dog_Id;
    const startDate = request.startDate;
    const finishDate = request.finishDate;
    const post = request.post;

    res.json({owner_Id, dog_Id, startDate, finishDate, post})

  }catch (err) {
    return res.status(500).json({
      message: err.message
    });
  };
});

// Index All Dogs

router.get ('/', async (req,res) => {
  try{
    res.json(await careRequestController.indexAll());
  }catch(error){
    res.status(500).json({
      error: 'error',
      message: 'error'
    });
  };
});

// Update Request by ID 

router.put('/:id', async (req, res) => {
  try{
    const body = req.body;
    res.json(await careRequestController.updateRequest(body, req.params.id));
  }catch(err){
    return res.status(500).json({
      message: err.message
    });
  };
});

// Delete Request by ID

router.delete('/:id', async (req, res) => {
  try{
    res.json(await careRequestController.deleteRequest(req.params.id));
  }catch(err){
    res.status(500).json({
      message: err.message
    });
  };
});


module.exports = router;