// const number = 1500
// if(number == 1500){
//   console.log('Number Match');
// }else{
//   console.log("Number Not Match");
// }
// const string = "Hey this is my first node app thank you!!!";
// console.log(string);
// var name = require("./test")
// var util_file = require("./util")
// require("./mind-grenade")
// console.log(name)
// console.log(name.Jay)
// console.log(name.Wankhede)

// var single = require("./alternative-synatx")
// console.log(single);


const {readFileSync, writeFileSync} = require('fs');

const fisrtFile = readFileSync('./Parent-Folder/first.txt', 'utf8');
const secondFile = readFileSync('./Parent-Folder/second-file.txt', 'utf8');
console.log(fisrtFile,secondFile);

const third_file = writeFileSync('./Parent-Folder/result.txt', `Hello hii this is my experiment ${fisrtFile}, 
${secondFile}`, { flag: 'a' }
)

