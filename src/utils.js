/** @format */

import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "node:path";
import os from "node:os";

export const defaultUserName = "my friend";

export const getUserName = () => {
	const userNameArgs = process.argv.find((arg) =>
		arg.startsWith(`--username=`)
	);
	let userName = defaultUserName;
	if (userNameArgs) {
		userName = extractSubstringAfterPointer(userNameArgs, "=");
	}
	return userName;
};

export const getDirName = () => dirname(fileURLToPath(import.meta.url));
export const getStartingWorkingDirectory = () => os.homedir();
export const getCurrentDirectory = () => process.cwd();
export const getParentDirectory = (currentDirectory) =>
	path.dirname(currentDirectory);
export const getAbsolutePath = (directoryPath) => path.resolve(directoryPath);
export const getFileNameFromSourcePath = (sourcePath) =>
	path.basename(sourcePath);
export const getTargetPath = (targetDirectory, fileName) =>
	path.join(targetDirectory, fileName);

export const sayWelcome = () => {
	const userName = getUserName();
	console.log(`Welcome to the File Manager, ${userName}`);
};

export const sayGoodBye = () => {
	const userName = getUserName();
	console.log(`Thank you for using File Manager, ${userName}, goodbye!`);
};

export const printWorkingDirectory = () => {
	const directory = getCurrentDirectory();
	console.log(`You are currently in ${directory}`);
};

export const getInvalidInputMsg = () => console.log(`Invalid input`);
export const getErrorMsg = () => console.log(`Operation failed`);

export const extractSubstringAfterPointer = (str, pointer) => {
	return str.split(pointer)[1];
};

export const changeDirectory = (path) => {
	try {
		process.chdir(path);
	} catch (err) {
		getInvalidInputMsg();
		console.error(err);
	}
};

export const printWorkingDirectoryAndPrompt = (rl) => {
	printWorkingDirectory();
	rl.prompt();
};
