var path = require('path')
module.exports = require('minimist')(process.argv, {
	alias:{
		s:'service',
		w:'writemanifest'
	},
	boolean:[
		'writemanifest'
	],
	default:{
		// allocate ports for each service so we can boot them
		// all at once or individually
		webport:process.env['WEB_PORT'] || 8080,
		webhost:process.env['WEB_HOST'] || '127.0.0.1',
		authport:process.env['AUTH_PORT'] || 8081,
		authhost:process.env['AUTH_HOST'] || '127.0.0.1',
		diggerport:process.env['DIGGER_PORT'] || 8082,
		diggerhost:process.env['DIGGER_HOST'] || '127.0.0.1',
		dbport:process.env['DB_PORT'] || 8083,
		dbhost:process.env['DB_HOST'] || '127.0.0.1',
		www:path.join(__dirname, 'www'),
		database:process.env['DATABASE'] || '/tmp/genericappdb',
		facebookid:process.env['FACEBOOK_ID'],
		facebooksecret:process.env['FACEBOOK_SECRET'],
		twitterid:process.env['TWITTER_ID'],
		twittersecret:process.env['TWITTER_SECRET'],
		googleid:process.env['GOOGLE_ID'],
		googlesecret:process.env['GOOGLE_SECRET']
	}
})