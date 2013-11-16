var config = {};

config.github = {
	"username" : "", // github username
	"password" : "", //github password
	"user" : "", // github user (probably name as username)
	"repo" : "" // repo you are importing issues to
};

config.csv = "report_1.csv"; // trac should name file this by default
config.debug = true; // gives verbose output on import

module.exports = config;
