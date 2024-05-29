import fs from "fs";
import Commit from "../classes/Commit.js";
import { getInitiateObj as _getInitiateObj, findWitnessRoot, getCommitHistory, insertCommit } from "../utils/utilities.js";
import { cwd } from 'process';

function commit(msg, author) {


    try {
        const currentDir = cwd();

        const commit = new Commit(msg, author);
        console.log(commit);

        insertCommit(commit);
        const commitHistory = getCommitHistory(`${currentDir}/.witness/commitHistory.json`);

        console.log("commit histoy is: ", commitHistory);
    } catch (error) {
        console.log(error);
    }


}

commit("msg from argument", "author from argument");