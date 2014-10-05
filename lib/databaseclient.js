// get a multi-level client to the level backend
var reconnect = require('reconnect-net')
var multilevel = require('multilevel')
var sublevel = require('./sublevel')
var net = require('net')
var log = require('./log')('database:client')

module.exports = function(config){
	var db = multilevel.client()
	reconnect(function (stream) {
		stream.pipe(db.createRpcStream()).pipe(stream)
	}).connect(config.dbport, config.dbhost)
	log('client connection: ' + config.dbhost + ':' + config.dbport)
	return sublevel(db)
}