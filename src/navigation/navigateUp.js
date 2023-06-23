/** @format */
import {
	getCurrentDirectory,
	getParentDirectory,
	changeDirectory,
} from "../utils.js";

export const navigateUp = () => {
	const currentDirectory = getCurrentDirectory();
	const parentDirectory = getParentDirectory(currentDirectory);

	if (currentDirectory === parentDirectory) {
		return;
	}

	changeDirectory(parentDirectory);
};


