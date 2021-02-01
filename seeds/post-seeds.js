const { Post } = require('../models');

const postData = [
    {
        first_name: 'Steve',
        last_name: 'Gerten',
        email: '1gerten@gmail.com',
        survey_query: 'I started the company!'
    },
    {
        first_name: 'Pad',
        last_name: 'Getchell',
        email: '2gerten@gmail.com',
        survey_query: 'Saw an ad on facebook'
    },
    {
        first_name: 'Emily',
        last_name: 'Leighton',
        email: '3gerten@gmail.com',
        survey_query: 'Heard your ad on the radio going home from work'
    },
    {
        first_name: 'Mike',
        last_name: 'Zielinski',
        email: '4gerten@gmail.com',
        survey_query: 'I started the company!'
    },
    {
        first_name: 'Doug',
        last_name: 'Louiselle',
        email: '5gerten@gmail.com',
        survey_query: 'My mom knows your mom'
    },
    {
        first_name: 'Dustin',
        last_name: 'Peterson',
        email: '6gerten@gmail.com',
        survey_query: 'My best friend bought a house with you'
    }
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;