/** @format */
import fs from "node:fs";
import { getErrorMsg } from "../utils.js";

export const readFile = (filePath) => {
	const readableStream = fs.createReadStream(filePath, "utf8");

	readableStream.on("data", (chunk) => {
		console.log(chunk);
	});

	readableStream.on("end", () => {
		console.log("Completed");
	});

	readableStream.on("error", (error) => {
		getErrorMsg();
	});
};
