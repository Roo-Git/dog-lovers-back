const router = require('express').Router();

const userRouter = require('./routes/user.router');
const dogRouter = require('./routes/dog.router');
const careRequestRouter = require('./routes/careRequest.router');

// REST RESOURCES

router.use('/users', userRouter);
router.use('/dogs', dogRouter);
router.use('/requests', careRequestRouter);

module.exports = router;