let prayers = require("../data/prayers.json");
const { v4: uuidv4 } = require("uuid");
const { writeData } = require("../utils");

function findAll() {
	return new Promise((resolve, reject) => {
		resolve(prayers);
	});
}

function findById(id) {
	return new Promise((resolve, reject) => {
		const prayer = prayers.find((p) => p.id === id);
		resolve(prayer);
	});
}

function create(prayer) {
	return new Promise((resolve, reject) => {
		const newPrayer = { id: uuidv4(), ...prayer };
		prayers.push(newPrayer);
		writeData("./data/prayers.json", prayers);
		resolve(newPrayer);
	});
}

function update(id, prayer) {
	return new Promise((resolve, reject) => {
		const index = prayers.findIndex((p) => p.id === id);
		prayers[index] = { id, ...prayer };
		writeData("./data/prayers.json", prayers);
		resolve(prayers[index]);
	});
}

// function remove(id) {
// 	return new Promise((resolve, reject) => {
// 		prayers = prayers.filter((p) => p.id !== id);
// 		writeData("./data/prayers.json", prayers);
// 		resolve();
// 	});
// }

module.exports = {
	findAll,
	findById,
	create,
	update,
	// remove,
};
