var http = require('http')
var Gandalf = require('../lib/gandalf')
var log = require('../lib/log')('auth')

module.exports = function(config, done){

	var gandalf = Gandalf(config)
	
	var server = http.createServer(function(req, res){
		res.end('ok')
	})

	server.listen(config.authport, function(){
		log('auth listening on port: %s', config.authport)
		if(done){
			done()
		}
	})	
}