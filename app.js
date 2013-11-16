var config = require('./config');
var fs = require('fs')
, csv = require('csv')
, GitHubApi = require('github')
, github = new GitHubApi({
	version: "3.0.0"
,	timeout: 5000
});

// Log into github
github.authenticate({
	type: "basic"
, username: config.github.username
, password: config.github.password
});	


// CSV validation
var hasOwner = function(row) {
	return row.owner != 'somebody';
}
var hasMilestone = function(row) {
	return row.milestone != '';
}

// Reading CSV
console.log('Importing...');
csv()
.from(config.csv, {columns: true})
.to(console.log)
.transform(function(row, idx) {
	// Create issue object
	var issue = {
		"user" : config.github.user,
		"repo" : config.github.repo,
		// Adds old ticket number to title
		"title" : row.summary + '('+row.ticket+')',
		"body" : row['_description'],
		// Adds type as label
		"labels" : [row.type]
	};
	// Adds owner & milestone as labels if applicable
	if (hasOwner(row)) issue.labels.push(row.owner);
	if (hasMilestone(row)) issue.labels.push(row.milestone);
	
	// Create New Issue
	github.issues.create(issue, function() {
		console.log('Import of '+ row.ticket +' successful');
		if (config.debug == true) {
			console.log('#'+row.ticket);
			console.log('Title: '+row.summary);
			console.log('Description: '+row['_description']);
			console.log('Type: '+row.type);
			if (hasOwner(row)) console.log('Assigned to: '+row.owner);
			if (hasMilestone(row)) console.log('Milestone: '+row.milestone);
			console.log('------------------------------');
		}
	});
});
