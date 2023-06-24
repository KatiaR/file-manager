/** @format */

import fs from "node:fs";
import {
	getErrorMsg,
	getFileNameFromSourcePath,
	getTargetPath,
} from "../utils.js";

export const copyFile = (sourcePath, targetDirectory) => {

	const fileName = getFileNameFromSourcePath(sourcePath);
	const targetPath = getTargetPath(targetDirectory, fileName);
	const sourceStream = fs.createReadStream(sourcePath);
	const targetStream = fs.createWriteStream(targetPath);

	sourceStream.pipe(targetStream);

	sourceStream.on("error", (err) => {
		getErrorMsg();
	});

	targetStream.on("error", () => {
		getErrorMsg();
	});

	targetStream.on("finish", () => {
		console.log(`Completed`);
	});
};
