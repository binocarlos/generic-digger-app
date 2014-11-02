var path = require('path')
var minimist = require('minimist')

/*

	produce a configuration that is based on the environment
	and any command line arguments that need processing
	
*/
module.exports = function(overrides){
	overrides = overrides || {}
	var opts = minimist(process.argv, {
		alias:{
			
		},
		boolean:[
			
		],
		default:{
			// where do the HTML files live
			document_root:path.join(__dirname, '..', 'www'),
			// the folder the leveldb lives
			database:process.env['DATABASE'] || '/tmp/genericappdb',
			// what port to listen on
			webport:process.env['WEBPORT'] || 80,
			// settings for the various social logins
			facebookid:process.env['FACEBOOK_ID'],
			facebooksecret:process.env['FACEBOOK_SECRET'],
			twitterid:process.env['TWITTER_ID'],
			twittersecret:process.env['TWITTER_SECRET'],
			googleid:process.env['GOOGLE_ID'],
			googlesecret:process.env['GOOGLE_SECRET']
		}
	})

	Object.keys(overrides || {}).forEach(function(key){
		opts[key] = overrides[key]
	})

	return opts
}