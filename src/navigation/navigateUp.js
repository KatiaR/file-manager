/** @format */
import {
	getCurrentDirectory,
	getParentDirectory,
	printWorkingDirectory,
	changeDirectory,
} from "../utils.js";

export const navigateUp = () => {
	const currentDirectory = getCurrentDirectory();
	const parentDirectory = getParentDirectory(currentDirectory);

	if (currentDirectory === parentDirectory) {
		printWorkingDirectory(currentDirectory);
		return;
	}

	changeDirectory(parentDirectory);
	printWorkingDirectory(parentDirectory);
};

navigateUp();
