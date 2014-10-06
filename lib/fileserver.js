var send = require('send')
var url = require('url')
var fs = require('fs')
var log = require('./log')('fileserver')

module.exports = function(config){
	
	if(!fs.existsSync(config.www)){
		log.error('document root does not exist: %s', config.www)
		process.exit(1)
	}
	else{
		log('document root: %s', config.www)
	}

	return function(req, res){

	  function error(err) {
	    res.statusCode = err.status || 500;
	    res.end(err.message);
	  }

	  function headers(res, path, stat) {
	    
	  }

	  function redirect() {
	    res.statusCode = 301;
	    res.setHeader('Location', req.url + '/');
	    res.end('Redirecting to ' + req.url + '/');
	  }

	  var pathname = url.parse(req.url).pathname
	  log('file: %s', pathname)
	  send(req, pathname, {root: config.www})
	  .on('error', error)
	  .on('directory', redirect)
	  .on('headers', headers)
	  .pipe(res)
	}
}