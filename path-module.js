const path = require('path')
console.log(path.sep);

const pathJoin = path.join('Parent-Folder','/grand_child.txt')
console.log(pathJoin);

const baseFileName = path.basename(pathJoin)
console.log(baseFileName);