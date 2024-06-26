// import {argv} from process;
import { initiate} from "./commands/initiate.js";
import { add } from "./commands/add.js";
import { status } from "./commands/status.js";
import { commit } from "./commands/commit.js";

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
  case "status":
    //check if .witness is created or not
    status();
    console.log("that was all about status");
    break;
  case "commit":
    //check if .witness is created or not
    commit(process.argv);
    console.log("commited!!");
    break;
  default:
    console.error("Invalid command.");
}