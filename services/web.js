// the front-end HTTP router - serves the static files
var fs = require('fs')
var http = require('http')

var log = require('../lib/log')('web')
var Router = require('../lib/router')

module.exports = function(config, done){

	var router = Router(config)
	var server = http.createServer(router)

	server.listen(config.webport, function(){
		log('web listening on port: %s', config.webport)
		if(done){
			done()
		}
	})	
}
