import { mkdirSync } from "fs";

export default class Witness {
    constructor(dir) {
        try {
            mkdirSync(`.witness`);
            mkdirSync(`.witness/objects`);
            
        } catch (error) {
            console.error('Error creating directory:', error);    
        }

        this.rootDir = `${dir}/`;
        this.versionId = 0;
    }
}
