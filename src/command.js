/** @format */

import { getInvalidInputMsg } from "./utils.js";
import { exitFileManager } from "./exit.js";
import { navigateUp } from "./navigation/navigateUp.js";
import { changeDirectoryTo } from "./navigation/navigateTo.js";
import { listFilesAndDirectories } from "./navigation/list.js";
import { readFile } from "./basicOperations/read.js";
import { createEmptyFile } from "./basicOperations/create.js";
import { renameFile } from "./basicOperations/rename.js";

export const executeCommand = (command, rl) => {
	if (command === ".exit") {
		exitFileManager();
	} else if (command.startsWith("cd ")) {
		changeDirectoryTo(command.split(" ")[1]);
		rl.prompt();
	} else if (command.startsWith("ls")) {
		listFilesAndDirectories();
		rl.prompt();
	} else if (command === "up") {
		navigateUp();
		rl.prompt();
	} else if (command.startsWith("cat ")) {
		readFile(command.split(" ")[1]);
		rl.prompt();
	} else if (command.startsWith("add ")) {
		createEmptyFile(command.split(" ")[1]);
		rl.prompt();
	} else if (command.startsWith("rn ")) {
		console.log("command.split1]", command.split(" ")[1]);
		console.log("command.split2]", command.split(" ")[2]);
		renameFile(command.split(" ")[1], command.split(" ")[2]);
		rl.prompt();
	} else if (command.startsWith("mkdir ")) {
		renameFile(command.split(" ")[1], command.split(" ")[2]);
		rl.prompt();
	} else if (command.startsWith("rm ")) {
		deleteFileOrDirectory(command.split(" ")[1]);
		rl.prompt();
	} else {
		getInvalidInputMsg();
		rl.prompt();
	}
};
