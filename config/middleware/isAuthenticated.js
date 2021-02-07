module.exports = function (req, res, next) {
	console.log('req: ', req.session.username);
	if (req.session.username) {
		return next();
	}
	return res.redirect('/login');
};
