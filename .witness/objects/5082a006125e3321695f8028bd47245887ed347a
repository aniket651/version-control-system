import { existsSync, writeFileSync } from "fs";
// const initiate = require("..");
import Witness from "../classes/Witness.js";
import { cwd } from 'process';
import { getInitiateObj as _getInitiateObj } from "../utils/utilities.js";
const getInitiateObj = _getInitiateObj;

function initiate() {

    const currentDir = cwd();

    console.log(currentDir);
    if (existsSync(`${currentDir}/.witness`)) {
        console.log("witness has already been activated !")
        return;
    }
    const witness = new Witness(currentDir);//initializing witness

    const commitHistory = [];




    try {
        writeFileSync(`${currentDir}/.witness/initiateObj.json`, JSON.stringify(witness));
        console.log('initiateObj created successfully!');

        writeFileSync(`${currentDir}/.witness/commitHistory.json`, JSON.stringify(commitHistory));
        console.log('commitHistory created successfully!');
        
    } catch (error) {
        console.error('Error creating initial files: ', error);
        
    }
    
    

    const initObj = getInitiateObj(`${currentDir}/.witness/initiateObj.json`);

    console.log(initObj);
}

initiate();