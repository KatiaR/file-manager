/** @format */
import {
	sayWelcome,
	extractSubstringAfterPointer,
	defaultUserName,
	printWorkingDirectory,
} from "./utils.js";

export const welcome = () => {
	const userNameArgs = process.argv.find((arg) =>
		arg.startsWith(`--username=`)
	);
	const userName =
		extractSubstringAfterPointer(userNameArgs, "=") ?? defaultUserName;

	sayWelcome(userName);
	printWorkingDirectory();
};
