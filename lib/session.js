var LevelSession = require('level-session')

module.exports = function(db){
	return LevelSession({
		db:db.sublevel('session')
	})
}