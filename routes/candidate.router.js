const router = require('express').Router({mergeParams:true});
const candidateController = require ('../controllers/candidate.controller');

// Create Candidate

router.post('/', async (req,res) => {
  try {
    res.json (await candidateController.createCandidate(req.body));

  } catch (error) {
    res.status(500).json({
      error: 'error',
      message: 'error'
    });
  };
});

// Get Candidate by ID

router.get ('/:id', async (req, res) => {
  try {

    const id = req.params.id;
    const candidate = await candidateController.findCandidate(id);
    const post = candidate.post
    const confirmedBySitter = candidate.confirmedBySitter
    const acceptedByOwner = candidate.acceptedByOwner
    const careRequest_Id = candidate.careRequest_Id
    const sitter_Id = candidate.sitter_Id

  
    res.json({post, confirmedBySitter, acceptedByOwner, careRequest_Id, sitter_Id})

  }catch (err) {
    return res.status(500).json({
      message: err.message
    });
  };
});


// GET OWNER STATUS
router.get ('/owner/accepted/:id', async (req, res) => {
  try {

    const id = req.params.id;
    const candidate = await candidateController.getOwnerStatus(id);
    const acceptedByOwner = candidate.acceptedByOwner
    res.json({acceptedByOwner})

  }catch (err) {
    return res.status(500).json({
      message: err.message
    });
  };
});

// GET SITTER STATUS

router.get ('/sitter/confirmed/:id', async (req, res) => {
  try {

    const id = req.params.id;
    const candidate = await candidateController.getSitterStatus(id);
    const confirmedBySitter = candidate.confirmedBySitter
    res.json({confirmedBySitter})

  }catch (err) {
    return res.status(500).json({
      message: err.message
    });
  };
});




// Index All Candidates

router.get ('/', async (req,res) => {
  try{
    res.json(await candidateController.indexAll());
  }catch(error){
    res.status(500).json({
      error: 'error',
      message: 'error'
    });
  };
});

// Update Candidate by ID

router.put('/:id', async (req, res) => {
  try{
    const body = req.body;
    res.json(await candidateController.updateCandidate(body, req.params.id));
  }catch(err){
    return res.status(500).json({
      message: err.message
    });
  };
});

// Delete Candidate by ID

router.delete('/:id', async (req, res) => {
  try{
    res.json(await candidateController.deleteCandidate(req.params.id));
  }catch(err){
    res.status(500).json({
      message: err.message
    });
  };
});

module.exports = router;