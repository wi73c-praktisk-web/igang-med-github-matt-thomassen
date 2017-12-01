
const url = require('url');

module.exports = {
	init: function (req, res) {
		var pathname = url.parse(req.url, true).pathname;
		if (pathname === '/forside') {
			res.statusCode = 200;
			res.setHeader('Content-Type', 'text/html');
			res.write('<ul><li><a href="/home">Home</a></li><li><a href="/forside">Side 2</a></ul><h1>Vi er paa side 2</h1>');
			res.end()

		}if (pathname === '/home') {
				res.statusCode = 200;
				res.setHeader('Content-Type', 'text/html');
				res.write('<ul><li><a href="/home">Home</a></li><li><a href="/forside">Side 2</a></li></ul> <h1>Vi er Home</h1>');
				res.end();
		} else {
			res.statusCode = 404;
			res.end();
		}
	}
};
