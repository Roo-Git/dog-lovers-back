const router = require('express').Router();

const userRouter = require('./routes/user.router');
const dogRouter = require('./routes/dog.router');
const careRequestRouter = require('./routes/careRequest.router');
const candidateRouter = require('./routes/candidate.router');
const confirmationRouter = require('./routes/confirmation.router');

// REST RESOURCES

router.use('/users', userRouter);
router.use('/dogs', dogRouter);
router.use('/requests', careRequestRouter);
router.use('/candidates', candidateRouter);
router.use('/confirmations', confirmationRouter);

module.exports = router;