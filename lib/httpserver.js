var http = require('http')
var log = require('../lib/log')('web')

module.exports = function(config, handler, done){
	var server = http.createServer(handler)
	server.listen(config.webport, function(){
		log('listening on port: %s', config.webport)
		if(done){
			done()
		}
	})	
}
