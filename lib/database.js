var fs = require('fs')
var level = require('level')
var log = require('../lib/log')('database')

module.exports = function(config){
	var dbpath = config.database
	if(!fs.existsSync(dbpath)){
		console.error('error - database path does no exist: ' + dbpath)
		process.exit(1)
	}
	log('creating level database: %s', dbpath)
	var db = level(dbpath)
	return db
}