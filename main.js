var app = module.exports = require("express").createServer();

var skai = require("skai").Begin();

app.get("/", function(request, response) {
	skai.query("list all forms", function(err, result) {
		response.end(JSON.stringify(result));
	})
});

app.listen(80);
console.log("ready");