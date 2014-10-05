var fs = require('fs')
var net = require('net')
var multilevel = require('multilevel')
var level = require('level')
var sublevel = require('level-sublevel')
var log = require('./log')('database')

module.exports = function(path){
	if(!fs.existsSync(path)){
		console.error('error - database path does no exist: ' + path)
		process.exit(1)
	}
	log('creating level database: %s', path)
	var db = sublevel(level(path))

	multilevel.writeManifest(db, __dirname + '/manifest.json')

	return db
}