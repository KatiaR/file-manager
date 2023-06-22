/** @format */
import { sayGoodBye } from "./utils.js";

export const exitFileManager = () => {
	sayGoodBye();
	process.exit();
};
