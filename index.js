// import {argv} from process;
import { initiate} from "./commands/initiate.js";
import { add } from "./commands/add.js";

const action = process.argv[2];

switch (action) {
  case "initiate":
    initiate();
    console.log("initialized .witness repo");
    break;
  case "add":
    //check if .witness is created or not
    add(process.argv);
    console.log("adding to the staging area...");
    break;
  case "multiply":
    //check if .witness is created or not
    console.log("Multiplying...");
    break;
  case "divide":
    //check if .witness is created or not
    console.log("Dividing...");
    break;
  default:
    console.error("Invalid command.");
}