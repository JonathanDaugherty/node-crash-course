const fs = require('fs');
const path = require('path');

// Create Folder
// fs.mkdir(path.join(__dirname, 'Test'), {}, function (err) {
//     if (err) {
//         throw err;
//     }
//     console.log('Folder created...');
// })

// Create and write to file
// fs.writeFile(
//     path.join(__dirname, '/test', 'hello.txt'), 'Hello World', err => {
//         if (err) throw err;
//         console.log('File Written to...');

//         // File append
//         fs.appendFile(
//             path.join(__dirname, '/test', 'hello.txt'), ' I Love node.JS', err => {
//                 if (err) throw err;
//                 console.log('File Written to...');
//             }
//         )
//     }
// );

// Read File
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

// Rename File
fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'helloworld.txt'), (err, data) => {
    if (err) throw err;
    console.log('File Renamed...');
});