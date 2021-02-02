const router = require('express').Router();
const { Video, User, Comment } = require('../../models');
const sequelize = require('../../config/connection');

router.get('/', (req, res) => {
    Video.findAll({
        attributes: [
            'id',
            'video_url',
            'title',
            'created_at',
            [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
        ],
        order: [['created_at', 'DESC']],
        include: [
            {
                model: Comment,
                
            }
        ]
    })
})

module.exports = router;