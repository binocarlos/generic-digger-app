var fs = require('fs')
var level = require('level')
var log = require('../lib/log')('database')

/*

	create a leveldb at a given path
	
*/
module.exports = function(config){
	var dbpath = config.database
	if(!fs.existsSync(dbpath)){
		console.error('error - database path does not exist: ' + dbpath)
		process.exit(1)
	}
	log('creating level database: %s', dbpath)
	var db = level(dbpath)
	return db
}