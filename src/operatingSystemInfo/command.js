/** @format */
import { getInvalidInputMsg } from "../utils.js";
import os from "os";

export const getOperationSystemCommand = (command) => {
	const commandValue = command.substr(2);

	switch (commandValue) {
		case "EOL":
			console.log(JSON.stringify(os.EOL));
		case "cpus":
			os.cpus().forEach((cpu, index) => {
				console.log(`CPU ${index + 1}:`);
				console.log(`  Model: ${cpu.model}`);
				console.log(`  Speed: ${cpu.speed / 1000} GHz`);
			});
		case "homedir":
			console.log(os.homedir());
		case "username":
			console.log(os.userInfo().username);
		case "architecture":
			console.log(os.arch());
			break;
		default:
			getInvalidInputMsg();
	}
};
