var debug = require('debug')

function log(name){
	var logger = debug(name)
	logger.error = debug(name + ':error')
	logger.error.log = console.error.bind(console)
	return logger
}

module.exports = log