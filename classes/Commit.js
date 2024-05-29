import fs from "fs";
import Witness from "./Witness.js";
import Tree from "./Tree.js";
import CustomError from "./CustomError.js";
import { cwd } from 'process';
import { getInitiateObj as _getInitiateObj, findWitnessRoot} from "../utils/utilities.js";
const getInitiateObj = _getInitiateObj;

const currentDir = cwd();

export default class Commit{
    constructor(message, author) {
        try {
            this.rootDir = findWitnessRoot(currentDir);
            // const initObject = getInitiateObj(`${rootDir}/.witness/initiateObj`)
            // initObject.versionId++;
            // this.vId = initObject.versionId;
            this.message = message;
            this.author = author;
            this.timestamp = Date.now();
            this.tree = new Tree(this.rootDir); // Will be assigned a Tree object later
            
        } catch (error) {
            console.log("error in creating Commit Object: ", error);            
        }


    }
}