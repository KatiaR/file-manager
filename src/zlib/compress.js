/** @format */
import { createReadStream, createWriteStream } from "fs";
import zlib from "zlib";
import {
	getErrorMsg,
	getFileNameFromSourcePath,
	getTargetPath,
} from "../utils.js";

export const compressFile = (sourceFilePath, targetDirectory) => {
	const fileName = getFileNameFromSourcePath(sourceFilePath);
	const targetPath = getTargetPath(targetDirectory, fileName);
	const readStream = createReadStream(sourceFilePath);
	const writeStream = createWriteStream(targetPath);

	const brotliStream = zlib.createBrotliCompress();

	readStream.pipe(brotliStream).pipe(writeStream);

	readStream.on("error", (err) => {
		getErrorMsg();
		console.log(err);
	});

	writeStream.on("error", (err) => {
		getErrorMsg();
		console.log(err);
	});
};
