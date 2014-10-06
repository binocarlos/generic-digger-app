var LevelSession = require('level-session')
var spaces = require('level-spaces')
module.exports = function(db){
	return LevelSession({
		db:spaces(db, 'session')
	})
}