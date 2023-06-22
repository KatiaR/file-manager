/** @format */

const executeCommand = (command) => {
	if (command === ".exit") {
		exitFileManager();
	} else if (command === "cwd") {
		printWorkingDirectory();
		promptForCommand();
	} else {
		console.log("Invalid input");
		promptForCommand();
	}
};
