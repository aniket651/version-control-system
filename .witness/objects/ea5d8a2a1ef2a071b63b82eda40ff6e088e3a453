import { createHash } from 'crypto';
import { existsSync } from "fs";
import Witness from "./Witness.js";
import Blob from './Blob.js';
import { getInitiateObj as _getInitiateObj,getFilesSync } from "../utils/utilities.js";
const getInitiateObj = _getInitiateObj;
import path from 'path';

export default class Tree{
    files = []
    fileMap = {}
    constructor(directory) {
        try {
            this.files = getFilesSync(directory);
            this.files.forEach(element => {
                // const blob = new Blob(element.content);
                const hash = createHash('sha1').update(element.content).digest('hex');
                this.fileMap[element.path] = hash;
                if (!existsSync(`${directory}/.witness/objects/${hash}`)) {
                    const blob = new Blob(element.content);
                }
            });
            
        } catch (error) {
            console.log("error in creating Tree Object: ", error);
        }
    }



    addFile(filename, content) {
        const blob = new Blob(content);
        this.entries[filename] = blob.hash;
    }


}