var fs = require('fs')
var http = require('http')
var config = require('./config')
var Database = require('./database')
var Auth = require('./auth')
//var Router = require('./router')

var log = require('./log')('index')
var db = Database(config.database)
//var auth = Auth(db.sublevel('auth'), config)
/*
var router = Router({
	config:config,
	db:db,
	auth:auth
})
*/

var server = http.createServer(function(req, res){
	res.end('ok')
})

server.listen(config.port, function(){
	log('server listening on port: %s', config.port)
})