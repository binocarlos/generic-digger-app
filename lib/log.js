var debug = require('debug')

/*

	general logging module
	
*/

function log(name){
	var logger = debug(name)
	logger.error = debug(name + ':error')
	logger.error.log = console.error.bind(console)
	return logger
}

log.debug = debug

module.exports = log