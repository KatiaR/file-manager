/** @format */

import { getInvalidInputMsg, printWorkingDirectoryAndPrompt } from "./utils.js";
import { exitFileManager } from "./exit.js";
import { navigateUp } from "./navigation/navigateUp.js";
import { changeDirectoryTo } from "./navigation/navigateTo.js";
import { listFilesAndDirectories } from "./navigation/list.js";
import { readFile } from "./basicOperations/read.js";
import { createEmptyFile } from "./basicOperations/create.js";
import { renameFile } from "./basicOperations/rename.js";
import { copyFile } from "./basicOperations/copy.js";
import { moveFile } from "./basicOperations/move.js";
import { deleteFile } from "./basicOperations/delete.js";
import { getOperationSystemCommand } from "./operatingSystemInfo/command.js";

export const executeCommand = (command, rl) => {
	const firstArg = command.split(" ")[1];
	const secondArg = command.split(" ")[2];
	if (command === ".exit") {
		exitFileManager();
	} else if (command.startsWith("cd ")) {
		changeDirectoryTo(firstArg);
	} else if (command.startsWith("ls")) {
		listFilesAndDirectories();
	} else if (command === "up") {
		navigateUp();
	} else if (command.startsWith("cat ")) {
		readFile(firstArg);
	} else if (command.startsWith("add ")) {
		createEmptyFile(firstArg);
	} else if (command.startsWith("rn ")) {
		renameFile(firstArg, secondArg);
	} else if (command.startsWith("cp ")) {
		copyFile(firstArg, secondArg);
	} else if (command.startsWith("mv ")) {
		moveFile(firstArg, secondArg);
	} else if (command.startsWith("rm ")) {
		deleteFile(firstArg);
	} else if (command.startsWith("os ")) {
		getOperationSystemCommand(firstArg);
	} else {
		getInvalidInputMsg();
	}
	if (command !== ".exit") {
		printWorkingDirectoryAndPrompt(rl);
	}
};
