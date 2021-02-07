const { User } = require('../models');

const userData = [
	{
		first_name: 'Steve',
		last_name: 'Gerten',
		username: 'sgerten1',
		email: '1gerten@gmail.com',
		password: 'Reset123',
		survey_query: 'I started the company!'
	},
	{
		first_name: 'Pad',
		last_name: 'Getchell',
		username: 'pgetchell1',
		email: '2gerten@gmail.com',
		password: 'Reset123',
		survey_query: 'Saw an ad on facebook'
	},
	{
		first_name: 'Emily',
		last_name: 'Leighton',
		username: 'eleighton1',
		email: '3gerten@gmail.com',
		password: 'Reset123',
		survey_query: 'Heard your ad on the radio going home from work'
	},
	{
		first_name: 'Mike',
		last_name: 'Zielinski',
		username: 'mzielinski1',
		email: '4gerten@gmail.com',
		password: 'Reset123',
		survey_query: 'I started the company!'
	},
	{
		first_name: 'Doug',
		last_name: 'Louiselle',
		username: 'dlouiselle1',
		email: '5gerten@gmail.com',
		password: 'Reset123',
		survey_query: 'My mom knows your mom'
	},
	{
		first_name: 'Dustin',
		last_name: 'Peterson',
		username: 'dpeterson1',
		email: '6gerten@gmail.com',
		password: 'Reset123',
		survey_query: 'My best friend bought a house with you'
	}
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
