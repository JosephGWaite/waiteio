var express = require('express');
var app = express();
app.use(express.static("public/homepage"));
app.get('/resume', function(req,res) {
	res.sendFile('public/LatexResume/src/resume.pdf', {root: __dirname});
});
var server = app.listen(80, function () {
	var host = server.address().address; 
	var port = server.address().port;
	console.log('Listening on http://%s:%s', host, port);
});

