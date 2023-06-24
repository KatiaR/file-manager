/** @format */

import fs from "node:fs";
import {
	getErrorMsg,
	getFileNameFromSourcePath,
	getTargetPath,
} from "../utils.js";
import { deleteFile } from "./delete.js";

export const moveFile = (sourcePath, targetDirectory) => {
	const fileName = getFileNameFromSourcePath(sourcePath);
	const targetPath = getTargetPath(targetDirectory, fileName);
	const sourceStream = fs.createReadStream(sourcePath);
	const targetStream = fs.createWriteStream(targetPath);

	sourceStream.pipe(targetStream);

	sourceStream.on("error", (error) => {
		getErrorMsg();
	});

	targetStream.on("error", (error) => {
		getErrorMsg();
	});

	targetStream.on("finish", () => {
		deleteFile(sourcePath);
	});
};
