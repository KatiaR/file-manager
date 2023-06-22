/** @format */

import { getInvalidInputMsg } from "./utils.js";
import { exitFileManager } from "./exit.js";
import { navigateUp } from "./navigation/navigateUp.js";
import { changeDirectoryTo } from "./navigation/navigateTo.js";

export const executeCommand = (command, rl) => {
	if (command === ".exit") {
		exitFileManager();
	} else if (command.startsWith("cd ")) {
		changeDirectoryTo(command.split(" ")[1]);
		rl.prompt();
	} else if (command.startsWith("ls")) {
		console.log(`command.startsWith("ls")`);
		listFiles();
		rl.prompt();
	} else if (command === "up") {
		navigateUp();
		rl.prompt();
	} else if (command.startsWith("mkdir ")) {
		createDirectory(command.split(" ")[1]);
		rl.prompt();
	} else if (command.startsWith("rm ")) {
		deleteFileOrDirectory(command.split(" ")[1]);
		rl.prompt();
	} else {
		getInvalidInputMsg();
		rl.prompt();
	}
};
