/** @format */

import { welcome } from "./welcome.js";

import readline from "node:readline";

const startFileManager = () => {
	welcome();

	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
	});
	process.on("SIGINT", () => {
		sayGoodBye(userName);
		process.exit();
	});
};

startFileManager();
