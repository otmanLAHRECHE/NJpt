
const path = require('path')

console.log(path.sep)

const filepath = path.join('/folder/','subFolder','text.txt')
console.log(filepath)

const base = path.basename(filepath)
console.log(base)

const absolute = path.resolve(__dirname,'folder','sunFolder','text.txt')
console.log(absolute)