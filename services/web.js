var fs = require('fs')
var http = require('http')

var log = require('../lib/log')('web')
//var Router = require('./router')
//var db = Database(config.database)
//var auth = Auth(db.sublevel('auth'), config)
/*
var router = Router({
	config:config,
	db:db,
	auth:auth
})
*/

module.exports = function(config, done){
	var server = http.createServer(function(req, res){
		res.end('ok')
	})

	server.listen(config.webport, function(){
		log('server listening on port: %s', config.webport)
		if(done){
			done()
		}
	})	
}
