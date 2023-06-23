/** @format */

import fs from "node:fs";
import { getErrorMsg } from "../utils.js";

export const deleteFile = (filePath) => {
	fs.unlink(filePath, (error) => {
		if (error) {
			getErrorMsg();
			console.log(error);
		}
	});
};
