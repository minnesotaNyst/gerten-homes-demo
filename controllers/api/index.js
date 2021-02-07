const router = require('express').Router();

// const userRoutes = require('./user-routes.js');
const userRoutes = require('./user-routes');
// const commentRoutes = require('./comment-routes');
const commentRoutes = require('./comment-routes');
// video routes
const videoRoutes = require('./video-routes');

// router.use('/posts', userRoutes);
router.use('/users', userRoutes);
// router.use('/comments', commentRoutes);
router.use('/comments', commentRoutes);
// router.use('/videos', videoRoutes);
router.use('/videos', videoRoutes);

module.exports = router;