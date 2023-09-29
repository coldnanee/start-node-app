import express from "express";

const app = express();

const PORT = 3000;

const start = () => {
	try {
		app.listen(PORT, () => {
			console.log(`Api is starting on port ${PORT}`);
		});
	} catch (e) {
		console.log(e);
	}
};

start();
