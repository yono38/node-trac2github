node-trac2github
================

Node script for importing TRAC CSV into github issues

== To Install ==
Run npm install in root directory

== To Use ==
- In TRAC, go to View Tickets, then click {1}	Active Tickets
- At the bottom of the page, it should say "Download in other formats". Click Comma-delimited Text 
- Modify config.js with your github info and the path to the CSV file from TRAC
- Run "node app.js"


== Notes ==

I made some design choices that may not apply to you. I don't currently import comments, only the bugs themselves. I probably won't add this functionality as I didn't leave many comments on my tickets, but if you want it please feel free to fork and I'd love to add it in!
I add the old ticket number in the issue title such as "Improve Github Importing (22)" for TRAC ticket #22. I add the assigned to & milestone as labels to the issue. It would be great to add integrate milestones from TRAC into github issues milestones, but I didn't use that feature much either, so I chose not to. I also don't deal with priorities, as github issues doesn't natively support that feature.

I know that this is a pretty basic script, but I figured it could be a good starting point for node developers trying to migrate from TRAC to github issues.

== Ideas to improve ==
- Import of TRAC comments
- Use of github issues milestones
- Importing priorities using labels - possibly by creating a map of priority -> label name
- Importing components using labels

