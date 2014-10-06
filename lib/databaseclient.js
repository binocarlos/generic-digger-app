// get a multi-level client to the level backend
var reconnect = require('reconnect-net')
var multilevel = require('multilevel')
var sublevel = require('./sublevel')
var net = require('net')
var log = require('./log')('database:client')

module.exports = function(config, name){
	var multidb = multilevel.client()
	reconnect(function (stream) {
		stream.pipe(multidb.createRpcStream()).pipe(stream)
	}).connect(config.dbport, config.dbhost)
	log('client connection: ' + config.dbhost + ':' + config.dbport)
	var db = sublevel(multidb)
	return name ? db.sublevel(name) : db
}