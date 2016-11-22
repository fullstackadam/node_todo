var env = require('environment-vars');
var path = require('path');

var filePath = path.join(__dirname, '../');
env = env(filePath, '.env');

module.exports = {
	getDbConnectionString: function() {
		return 'mongodb://' + env.get('USERNAME') + ':' + env.get('PASSWORD') + '@' + env.get('URL');
	}
};