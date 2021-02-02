const router = require('express').Router();
const { Video, User, Comment } = require('../../models');

router.get('/', (req, res) => {
    Video.findAll({
        attributes: [
            'id',
            'video_url',
            'title',
            'created_at'
        ],
        order: [['created_at', 'DESC']],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'video_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['first_name', 'last_name']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbVideoData => res.json(dbVideoData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    Video.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'video_url',
            'title',
            'created_at'
        ],
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbVideoData => {
        if (!dbVideoData) {
            res.status(404).json({ message: 'No video found with this id' });
            return;
        }
        res.json(dbVideoData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// post a video
router.post('/', (req, res) => {
    Video.create({
        title: req.body.title,
        post_url: req.body.video_url,
        user_id: req.body.user_id
    })
    .then(dbVideoData => res.json(dbVideoData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// update video title
router.put('/:id', (req, res) => {
    Video.update(
      {
        title: req.body.title
      },
      {
        where: {
          id: req.params.id
        }
      }
    )
      .then(dbVideoData => {
        if (!dbVideoData) {
          res.status(404).json({ message: 'No video found with this id' });
          return;
        }
        res.json(dbVideoData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

router.delete('/:id', (req, res) => {
    Video.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbVideoData => {
        if (!dbVideoData) {
          res.status(404).json({ message: 'No video found with this id' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

module.exports = router;