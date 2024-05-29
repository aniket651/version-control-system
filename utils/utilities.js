// const fs = require("fs");
import { cwd } from 'process';
import CustomError from "../classes/CustomError.js";
import { statSync, readdirSync, readFileSync, accessSync, constants, writeFileSync } from "fs";
import path from 'path';

export function isDirectory(path) {
    try {
        const stats = statSync(path);
        return stats.isDirectory();
    } catch (err) {
        // Handle potential errors (e.g., path doesn't exist)
        return false; // Or throw an error if desired
    }
}


export function getFilesSync(directoryPath) {
    try {
        const files = readdirSync(directoryPath); // Get list of filenames
        const fileDetails = [];
    
        for (const filename of files) {
            if(filename===".witness"){
                continue;
            }
            const filePath = `${directoryPath}/${filename}`; // Construct full path
            if (isDirectory(filePath)) {
                const innerFiles = getFilesSync(`${filePath}/`);
                fileDetails.push(...innerFiles);
            }
            else {
                const content = readFileSync(filePath, 'utf8'); // Read file content
                fileDetails.push({ path: filePath, content }); // Store name and content
            }
        }
        return fileDetails;
        
    } catch (error) {
        console.log("error in getFilesSync: ", error);
    }
}


export function getInitiateObj(path){
    try {
        const initiateStr = readFileSync(path, 'utf-8');
        const initiateObj = JSON.parse(initiateStr);
        console.log(`the InitiateObj is: ${initiateObj}`);
        return initiateObj;
    } catch (error) {
        console.log(`error while reading InitiateObj: ${error}`);
    }
}

export function getCommitHistory(path){
    try {
        const historyStr = readFileSync(path, 'utf-8');
        const historyObj = JSON.parse(historyStr);
        return historyObj;
    } catch (error) {
        console.log("error in getting commit history: ", error);
    }
}

export function insertCommit(commitObj){
    try {
        const root = commitObj.rootDir;
        const commitHistory = getCommitHistory(`${root}/.witness/commitHistory.json`);
        commitHistory.push(commitObj);
        writeFileSync(`${root}/.witness/commitHistory.json`,JSON.stringify(commitHistory));
        return commitHistory;
    } catch (error) {
        console.log("error in inserting new commit in history: ", error);
    }
}

export function findWitnessRoot(currentDir) {
    try {
        console.log("inside findWitnessRoot, currentDir is: " ,currentDir);
        // const currentDir = cwd();
        if(accessSync(`${currentDir}/.witness`, constants.F_OK) === undefined){
            return currentDir;
        }
        else if(currentDir === "/"){
            throw new CustomError(".witness directory not found!!")
        }
        else return findWitnessRoot(path.dirname(currentDir))
    } catch (error) {
        console.log("error in finding .Witness directory",error);
    }
  }




  // Example usage
  const currentPath = process.cwd();