/** @format */
import { createReadStream, createWriteStream } from "fs";
import zlib from "zlib";
import {
	getErrorMsg,
	getFileNameFromSourcePath,
	getTargetPath,
} from "../utils.js";

export const decompressFile = (sourceFilePath, targetDirectory) => {
	const fileName = getFileNameFromSourcePath(sourceFilePath);
	const targetPath = getTargetPath(targetDirectory, fileName);
	const readStream = createReadStream(sourceFilePath);
	const writeStream = createWriteStream(targetPath);

	const brotliStream = zlib.createBrotliDecompress();

	readStream.pipe(brotliStream).pipe(writeStream);

	readStream.on("error", () => {
		getErrorMsg();
	});

	writeStream.on("error", (error) => {
		getErrorMsg();
	});
};
