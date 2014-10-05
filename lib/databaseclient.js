// get a multi-level client to the level backend

var multilevel = require('multilevel');
var net = require('net');
var log = require('./log')('database:client')
var manifest = require('../manifest.json');

module.exports = function(config){
	var db = multilevel.client(manifest)
	log('client connection: ' + config.dbhost + ':' + config.dbport)
	var con = net.connect(config.dbport, config.dbhost)
	con.pipe(db.createRpcStream()).pipe(con)
	return db
}