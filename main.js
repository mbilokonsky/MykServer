var app = module.exports = require("express").createServer();

var skai = require("skai").Begin();

app.get("/", function(request, response) {
	skai.query("list all forms", function(err, result) {
		response.end("There are " + result.length + " forms in this database.");
	})
});

app.listen(80);
console.log("ready");