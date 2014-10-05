var path = require('path')
module.exports = require('minimist')(process.argv, {
	alias:{
		port:'p',
		database:'d',
		facebookid:'fid',
		facebooksecret:'fsec',
		twitterid:'tid',
		twittersecret:'tsec',
		googleid:'gid',
		googlesecret:'gsec'
	},
	default:{
		port:process.env['PORT'] || 8080,
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