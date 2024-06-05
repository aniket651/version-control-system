// import {argv} from process;
import { initiate } from "./commands/initiate.js";


const action = process.argv[2];

switch (action) {
  case "initiate":
    // Add functionality here
    initiate();
    console.log("initialized .witness repo");
    break;
  case "subtract":
    // Subtract functionality here
    console.log("Subtracting...");
    break;
  case "multiply":
    // Multiply functionality here
    console.log("Multiplying...");
    break;
  case "divide":
    // Divide functionality here
    console.log("Dividing...");
    break;
  default:
    console.error("Invalid command.");
}