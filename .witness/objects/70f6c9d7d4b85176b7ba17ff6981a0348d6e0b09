// const crypto = require('crypto'); // Use built-in crypto module for hashing
// const fs = require("fs");


// // let versionId = 1;
// // let rootDir = "./";

// function isDirectory(path) {
//     try {
//         const stats = fs.statSync(path);
//         return stats.isDirectory();
//     } catch (err) {
//         // Handle potential errors (e.g., path doesn't exist)
//         return false; // Or throw an error if desired
//     }
// }

// function getFilesSync(directoryPath) {
//     const files = fs.readdirSync(directoryPath); // Get list of filenames
//     const fileDetails = [];

//     for (const filename of files) {
//         const filePath = `${directoryPath}${filename}`; // Construct full path
//         if (isDirectory(filePath)) {
//             const innerFiles = getFilesSync(`${filePath}/`);
//             fileDetails.push(...innerFiles);
//         }
//         else {
//             const content = fs.readFileSync(filePath, 'utf8'); // Read file content
//             fileDetails.push({ path: filePath, content }); // Store name and content
//         }
//     }
//     return fileDetails;
// }

// class Witness {
//     constructor() {
//         fs.mkdir(`.witness`, (err) => {
//             if (err) {
//                 console.error('Error creating directory:', err);
//             } else {
//                 console.log('Directory created successfully!');
//             }
//         });
//         fs.mkdir(`.witness/objects`, (err) => {
//             if (err) {
//                 console.error('Error creating directory:', err);
//             } else {
//                 console.log('Directory created successfully!');
//             }
//         })
//         this.rootDir = `${__dirname}/`;
//         this.versionId = 0;
//     }
// }





// // Define a class to represent a Blob object
// class Blob extends Witness {
//     constructor(content) {
//         this.content = content;
//         this.hash = this.calculateHash();
//         fs.writeFile(`${super.rootDir}/.witness/objects/${this.hash}`, content, (err) => {
//             if (err) {
//                 console.error('Error creating file:', err);
//             } else {
//                 console.log('File created successfully!');
//             }
//         });
//     }

//     calculateHash() {
//         const hash = crypto.createHash('sha1').update(this.content).digest('hex');
//         return hash;
//     }
// }

// // Define a class to represent a Tree object
// class Tree extends Witness{
//     files = []
//     fileMap = {}
//     constructor(directory) {
//         this.files = getFilesSync(directory);
//         this.files.forEach(element => {
//             // const blob = new Blob(element.content);
//             const hash = crypto.createHash('sha1').update(element.content).digest('hex');
//             this.fileMap[element.path] = hash;
//             if (!fs.existsSync(`${super.rootDir}/.witness/objects/${hash}`)) {
//                 const blob = new Blob(element.content);
//             }
//         });
//     }



//     addFile(filename, content) {
//         const blob = new Blob(content);
//         this.entries[filename] = blob.hash;
//     }


// }

// // Define a class to represent a Commit object
// class Commit extends Witness{
//     constructor(message, author) {
//         super.versionId++;
//         this.vId = super.versionId;
//         // this.treeHead = new Tree();
//         this.message = message;
//         this.author = author;
//         this.timestamp = Date.now();
//         this.tree = new Tree(super.rootDir); // Will be assigned a Tree object later


//     }
// }

// function initiate() {
//     console.log("hehe");
//     if (fs.existsSync(`${__dirname}/.witness`)) {
//         console.log("witness has already been activated !")
//         return;
//     }
//     const witness = new Witness();//initializing witness
//     console.log(witness);
// }

// function commit(msg, author) {
//     const commit2 = new Commit(msg, author);
//     console.log(commit2);
// }


// module.exports = initiate;


// // console.log(commit);





