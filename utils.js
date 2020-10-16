const { rejects } = require("assert");
const fs = require("fs");

function writeData(filename, content) {
	fs.writeFileSync(filename, JSON.stringify(content), "utf8", (err) => {
		if (err) {
			console.log(err);
		}
	});
}

function getPostData(req) {
	return new Promise((resolve, reject) => {
		try {
			let body = "";
			req.on("data", (chunk) => {
				body += chunk.toString();
			});

			req.on("end", () => {
				resolve(body);
			});
		} catch (error) {
			reject(error);
		}
	});
}

module.exports = {
	writeData,
	getPostData,
};
