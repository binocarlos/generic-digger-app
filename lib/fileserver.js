var url = require('url')
var fs = require('fs')
var log = require('./log')('fileserver')
var ecstatic = require('ecstatic')

/*

	the file server is the static HTTP server
	
*/
module.exports = function(config){
	if(!fs.existsSync(config.document_root)){
		log.error('document root does not exist: %s', config.document_root)
		process.exit(1)
	}
	else{
		log('document root: %s', config.document_root)
	}
	var fileserver = ecstatic(config.document_root)
	return function(req, res){
	  var pathname = url.parse(req.url).pathname
	  log('file: %s', pathname)
	  fileserver(req, res)
	}
}