/** @format */

import { welcome } from "./welcome.js";
import { executeCommand } from "./command.js";
import readline from "node:readline";
import { exitFileManager } from "./exit.js";

const startFileManager = () => {
	try {
		const rl = readline.createInterface({
			input: process.stdin,
			output: process.stdout,
		});

		welcome();
		rl.prompt();
		rl.on("line", (input) => executeCommand(input, rl));
		rl.on("SIGINT", () => exitFileManager());
	} catch (err) {
		console.err(err);
	}
};

startFileManager();
