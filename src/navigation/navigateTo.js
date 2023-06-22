/** @format */
import {
	printWorkingDirectory,
	getInvalidInputMsg,
	getErrorMsg,
} from "../utils.js";
import path from "node:path";
import fs from "node:fs";

export const changeDirectoryTo = (pathTo) => {
	const absolutePath = path.resolve(pathTo);
	fs.access(absolutePath, (err) => {
		if (err) {
			getErrorMsg();
		} else {
			try {
				process.chdir(absolutePath);
				printWorkingDirectory();
			} catch {
				getInvalidInputMsg();
			}
		}
	});
};
