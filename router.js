const router = require('express').Router();

const userRouter = require('./routes/user.router');

// REST RESOURCES

router.use('/users', userRouter);

module.exports = router;