/** @format */

import {
	getInvalidInputMsg,
	printWorkingDirectoryAndPrompt,
	validateInput,
} from "./utils.js";
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
import { calculateHash } from "./basicOperations/hash.js";
import { compressFile } from "./zlib/compress.js";
import { decompressFile } from "./zlib/decompress.js";

export const executeCommand = (command, rl) => {
	const [_, firstArg, secondArg] = command.split(" ");
	const isError = validateInput(firstArg, secondArg, command);
	switch (true) {
		case isError:
			getInvalidInputMsg();
			break;
		case command === ".exit":
			exitFileManager();
			break;
		case command.startsWith("cd "):
			changeDirectoryTo(firstArg);
			break;
		case command.startsWith("ls"):
			listFilesAndDirectories();
			break;
		case command === "up":
			navigateUp();
			break;
		case command.startsWith("cat "):
			readFile(firstArg);
			break;
		case command.startsWith("add "):
			createEmptyFile(firstArg);
			break;
		case command.startsWith("rn "):
			renameFile(firstArg, secondArg);
			break;
		case command.startsWith("cp "):
			copyFile(firstArg, secondArg);
			break;
		case command.startsWith("mv "):
			moveFile(firstArg, secondArg);
			break;
		case command.startsWith("rm "):
			deleteFile(firstArg);
			break;
		case command.startsWith("os "):
			getOperationSystemCommand(firstArg);
			break;
		case command.startsWith("hash "):
			calculateHash(firstArg);
			break;
		case command.startsWith("compress "):
			compressFile(firstArg, secondArg);
			break;
		case command.startsWith("decompress "):
			decompressFile(firstArg, secondArg);
			break;
		default:
			break;
	}
	// if (command === ".exit") {
	// 	exitFileManager();
	// } else if (command.startsWith("cd ")) {
	// 	changeDirectoryTo(firstArg);
	// } else if (command.startsWith("ls")) {
	// 	listFilesAndDirectories();
	// } else if (command === "up") {
	// 	navigateUp();
	// } else if (command.startsWith("cat ")) {
	// 	readFile(firstArg);
	// } else if (command.startsWith("add ")) {
	// 	createEmptyFile(firstArg);
	// } else if (command.startsWith("rn ")) {
	// 	renameFile(firstArg, secondArg);
	// } else if (command.startsWith("cp ")) {
	// 	isSourceAndTargetPathExist() && copyFile(firstArg, secondArg);
	// } else if (command.startsWith("mv ")) {
	// 	isSourceAndTargetPathExist() && moveFile(firstArg, secondArg);
	// } else if (command.startsWith("rm ")) {
	// 	deleteFile(firstArg);
	// } else if (command.startsWith("os ")) {
	// 	getOperationSystemCommand(firstArg);
	// } else if (command.startsWith("hash ")) {
	// 	calculateHash(firstArg);
	// } else if (command.startsWith("compress ")) {
	// 	isSourceAndTargetPathExist() && compressFile(firstArg, secondArg);
	// } else if (command.startsWith("decompress ")) {
	// 	isSourceAndTargetPathExist() && decompressFile(firstArg, secondArg);
	// } else {
	// 	getInvalidInputMsg();
	// }
	// if (command !== ".exit") {
	// 	printWorkingDirectoryAndPrompt(rl);
	// }
	printWorkingDirectoryAndPrompt(rl);
};
