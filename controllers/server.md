## Her har jeg hostet en client sidded server på min pc, der er 2 .js filer den ene er server og den anden er controller

### I server.js require den en http adresse med hostname 127.0.0.1 med en port 3000. Så lokatere den til en folder ./controllers hvor den henter en fil routesController.

### Den laver en server med function med parameter req og res.

```javascript

//Server.js

const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const router = require('./controllers/routesController');

http.createServer(function (req, res) {
    router.init(req, res);
}).listen(port, hostname);

console.log(`serveren kører på http://${hostname}:${port}/`);

```

## routesController.js
###  Den require en url hvis pathname er === /forside skal den vise 200 som står for ingen fejl.
### Den setter header med en content type som er html. SÅ skal den skrive en ul-li med en link href.
### res end gør at den kan gå videre til den næste funktion. og det samme sker i if nummer 2. til sidst er der en else, som betyder hvis den responder med en statuscode so mer 404 som betyder fejl, so skal den end.

```javascript
//routesController.js

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

```