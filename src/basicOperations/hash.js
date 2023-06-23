/** @format */

import { createHash } from "node:crypto";
import { createReadStream } from "node:fs";
import { getErrorMsg } from "../utils.js";

export const calculateHash = (filePath) => {
	const hash = createHash("sha256");
	const stream = createReadStream(filePath);

	stream.on("data", (data) => {
		hash.update(data);
	});

	stream.on("end", () => {
		const fileHash = hash.digest("hex");
		console.log(`Hash for file ${filePath}: ${fileHash}`);
	});

	stream.on("error", (error) => {
		getErrorMsg();
	});
};
