import { createHash } from 'crypto';
import { writeFileSync } from "fs";
import { cwd } from 'process';
import Witness from "./Witness.js";
import { getInitiateObj as _getInitiateObj,findWitnessRoot } from "../utils/utilities.js";
const getInitiateObj = _getInitiateObj;

const currentDir = cwd();

export default class Blob{
    constructor(content) {
        try {
            const rootDir = findWitnessRoot(currentDir);
            const initObject = getInitiateObj(`${rootDir}/.witness/initiateObj.json`)
    
            this.content = content;
            this.hash = this.calculateHash();
            writeFileSync(`${initObject.rootDir}/.witness/objects/${this.hash}`, content);
            
        } catch (error) {
            console.log("error in creating Blobs: ", error);
        }
    }

    calculateHash() {
        const hash = createHash('sha1').update(this.content).digest('hex');
        return hash;
    }
}