/** @format */

import fs from "node:fs";
import { getErrorMsg } from "../utils.js";

export const createEmptyFile = (fileName) => {
	const fileDirectory = `${process.cwd()}/${fileName}`;

	fs.writeFile(fileDirectory, "", (error) => {
		if (error) getErrorMsg();
	});
};
