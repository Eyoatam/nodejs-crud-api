const Prayer = require("../models/prayerModel");
const { getPostData } = require("../utils");

// @desc Gets All Prayers
// @route GET /api/prayers
async function getPrayers(req, res) {
	try {
		const prayers = await Prayer.findAll();
		res.writeHead(200, { "Content-Type": "application/json" });
		res.end(JSON.stringify(prayers));
	} catch (error) {
		console.log(error);
	}
}

// @desc Gets Single Prayer
// @route GET /api/prayers/:id
async function getPrayer(req, res, id) {
	try {
		const prayer = await Prayer.findById(id);

		if (!prayer) {
			res.writeHead(404, { "Content-Type": "application/json" });
			res.end(JSON.stringify({ message: "Bad request, Prayer Not Found" }));
		} else {
			res.writeHead(200, { "Content-Type": "application/json" });
			res.end(JSON.stringify(prayer));
		}
	} catch (error) {
		console.log(error);
	}
}

// @desc Creates New Prayer
// @route POST /api/prayers
async function addNewPrayer(req, res) {
	try {
		let body = await getPostData(req);

		const {
			chat_id,
			username,
			first_name,
			last_name,
			phone_number,
		} = JSON.parse(body);

		const prayer = {
			chat_id,
			username,
			first_name,
			last_name,
			phone_number,
		};
		const newPrayer = await Prayer.create(prayer);

		res.writeHead(201, { "Content-Type": "application/json" });
		return res.end(JSON.stringify(newPrayer));
	} catch (error) {
		console.log(error);
	}
}

// @desc Creates New Prayer
// @route Put /api/prayers/:id
async function updatePrayer(req, res, id) {
	try {
		const prayer = await Prayer.findById(id);

		if (!prayer) {
			res.writeHead(404, { "Content-Type": "application/json" });
			res.end(JSON.stringify({ message: "Bad request, Prayer Not Found" }));
		} else {
			let body = await getPostData(req);

			const { title, description, rating } = JSON.parse(body);

			const prayerData = {
				title: title || prayer.title,
				description: description || prayer.description,
				rating: rating || prayer.rating,
			};
			const updatedPrayer = await Prayer.update(id, prayerData);

			res.writeHead(200, { "Content-Type": "application/json" });
			return res.end(JSON.stringify(updatedPrayer));
		}
	} catch (error) {
		console.log(error);
	}
}

<<<<<<< HEAD
// @desc Delete Prayer
// @route DELETE /api/prayers/:id
=======
@desc Delete Prayer
@route DELETE /api/prayers/:id
async function deletePrayer(req, res, id) {
	try {
		const prayer = await Prayer.findById(id);

		if (!prayer) {
			res.writeHead(404, { "Content-Type": "application/json" });
			res.end(JSON.stringify({ message: "Bad request, Prayer Not Found" }));
		} else {
			await Prayer.remove(id);
			res.writeHead(200, { "Content-Type": "application/json" });
			res.end(
				JSON.stringify({
					message: `Product With the Id ${id} has been removed`,
				})
			);
		}
	} catch (error) {
		console.log(error);
	}
}

module.exports = {
	getPrayers,
	getPrayer,
	addNewPrayer,
	updatePrayer,
	deletePrayer,
};
