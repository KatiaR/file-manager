/** @format */

import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "node:path";
import os from "node:os";

export const defaultUserName = "my friend";

export const getDirName = () => dirname(fileURLToPath(import.meta.url));
export const getStartingWorkingDirectory = () => os.homedir();
export const getCurrentDirectory = () => process.cwd();
export const getParentDirectory = (currentDirectory) =>
	path.dirname(currentDirectory);
export const getAbsolutePath = (directoryPath) => path.resolve(directoryPath);

export const sayWelcome = (username) => {
	console.log(`Welcome to the File Manager, ${username}`);
};

export const sayGoodBye = (username) => {
	console.log(`Thank you for using File Manager, ${username}, goodbye!`);
};

export const printWorkingDirectory = () => {
	const directory = getStartingWorkingDirectory();
	console.log(`You are currently in ${directory}`);
};

export const getInvalidInputMsg = () => `Invalid input`;
export const getErrorMsg = () => `Operation failed`;

export const extractSubstringAfterPointer = (str, pointer) => {
	return str.split(pointer)[1];
};

export const changeDirectory = (path) => {
	try {
		process.chdir(path);
	} catch (err) {
		console.error(err);
	}
};
