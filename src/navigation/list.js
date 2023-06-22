/** @format */
import path from "node:path";
import fs from "node:fs";
import { getCurrentDirectory } from "../utils.js";

export const listFilesAndDirectories = () => {
	try {
		const currentDirectory = getCurrentDirectory();
		const entries = fs.readdirSync(currentDirectory);
		const directories = [];
		const files = [];

		entries.forEach((item) => {
			const itemPath = path.join("./", item);
			const stats = fs.statSync(itemPath);

			if (stats.isDirectory()) {
				directories.push({ type: "Directory", name: item });
			} else {
				files.push({ type: "File", name: item });
			}
		});

		directories.sort((a, b) => a.name.localeCompare(b.name));
		files.sort((a, b) => a.name.localeCompare(b.name));

		const tableData = [...directories, ...files];
		console.table(tableData);
	} catch (error) {
		console.log("Operation failed");
	}
};
