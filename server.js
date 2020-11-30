const http = require("http");
const {
	getPrayers,
	getPrayer,
	addNewPrayer,
	updatePrayer,
	deletePrayer,
} = require("./controllers/prayerController");

const server = http.createServer((req, res) => {
	if (req.url === "/api/prayers" && req.method === "GET") {
		getPrayers(req, res);
	} else if (
		req.url.match(/\/api\/prayers\/([0-9]+)/) &&
		req.method === "GET"
	) {
		const id = req.url.split("/")[3];
		getPrayer(req, res, id);
	} else if (req.url === "/api/prayers" && req.method === "POST") {
		addNewPrayer(req, res);
	} else if (
		req.url.match(/\/api\/prayers\/([0-9]+)/) &&
		req.method === "PUT"
	) {
		const id = req.url.split("/")[3];
		updatePrayer(req, res, id);
	} else if (
		req.url.match(/\/api\/prayers\/([0-9]+)/) &&
		req.method === "DELETE"
	) {
		const id = req.url.split("/")[3];
		deletePrayer(req, res, id);
	} else {
		res.writeHead(404, { "Content-Type": "application/json" });
		res.end(
			JSON.stringify({ mesage: "The page you're looking for doesn't exixt" })
		);
	}
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
	console.log(`Server Running on port ${PORT}`);
});
