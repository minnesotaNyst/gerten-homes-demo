const router = require('express').Router();

// const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes');
// const commentRoutes = require('./comment-routes');
const commentRoutes = require('./comment-routes');
const { route } = require('./post-routes');

// router.use('/posts', postRoutes);
router.use('/posts', postRoutes);

// router.use('/comments', commentRoutes);
router.use('/comment', commentRoutes);

module.exports = router;
