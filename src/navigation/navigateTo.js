/** @format */
import { getAbsolutePath, changeDirectory } from "../utils.js";

export const changeDirectoryTo = () => {
	const absolutePath = getAbsolutePath();

	changeDirectory(absolutePath);
};
