const router = require('express').Router();
const sequelize = require('../config/connection');
const { Video, User, Comment } = require('../models');
// const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
    Video.findAll({
        // where: {
        //     // use the ID from the session
        //     user_id: req.session.user_id
        // },
        attributes: [
            'title',
            'created_at',
        ],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(dbVideoData => {
            // serialize data before passing to template
            const posts = dbVideoData.map(video => video.get({ plain: true }));
            res.render('dashboard');
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;