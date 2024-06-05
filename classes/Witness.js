import { mkdirSync,writeFileSync } from "fs";

export default class Witness {
    constructor(dir) {
        try {
            mkdirSync(`.witness`);
            mkdirSync(`.witness/objects`);
            mkdirSync(`.witness/hooks`);
            mkdirSync(`.witness/info`);
            mkdirSync(`.witness/refs`);
            writeFileSync(`${dir}/.witness/HEAD.json`,"");
            writeFileSync(`${dir}/.witness/config.json`,"");
        } catch (error) {
            console.error('Error creating directory:', error);    
        }

        this.rootDir = `${dir}`;
    }
}
