import { existsSync, writeFileSync } from "fs";
// const initiate = require("..");
import Witness from "../classes/Witness.js";
import { cwd } from 'process';

export function initiate() {

    const currentDir = cwd();

    console.log(currentDir);
    if (existsSync(`${currentDir}/.witness`)) {
        console.log("witness has already been activated !")
        return;
    }
    
    try {
        const witness = new Witness(currentDir);//initializing witness
    } catch (error) {
        console.error('Error in creating witness Object', error);
        
    }

}

// initiate();