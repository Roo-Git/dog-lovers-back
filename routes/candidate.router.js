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


module.exports = router;