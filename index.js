var exec = require('child_process').exec;
var pullNewResume; 
var express = require('express');
var app = express();

pullNewResume = exec('(cd public/LatexResume && git pull)',
  function (error, stdout, stderr) {
});

app.use(express.static("public/homepage"));

app.get('/resume', function(req,res) {
	res.sendFile('public/LatexResume/src/resume.pdf', {root: __dirname});
});
//app.post('/github-prhook-resume', function(req,res) {
//	console.log("hit");
//        pullNewResume = exec('echo HIT', function (error, stdout, stderr) {});
//});
//(cd public/LatexResume && git pull)
var server = app.listen(80, function () {
	var host = server.address().address; 
	var port = server.address().port;
	console.log('Listening on http://%s:%s', host, port);
});

