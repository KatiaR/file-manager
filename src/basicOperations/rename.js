/** @format */
import fs from "node:fs";
import { getErrorMsg } from "../utils.js";
import path from "node:path";

export const renameFile = (oldFilePath, newFileName) => {
	const directoryPath = path.dirname(oldFilePath);
	const newFilePath = `${directoryPath}/${newFileName}`;

	fs.rename(oldFilePath, newFilePath, (error) => {
		if (error) getErrorMsg();
	});
};
