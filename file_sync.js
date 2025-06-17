const { readFileSync, writeFileSync } = require('fs')

const text1 = readFileSync('./folder/subFolder2/first.txt', 'utf8')
const text2 = readFileSync('./folder/subFolder2/second.txt', 'utf8')

console.log(text1 +"..............."+ text2)

writeFileSync('./folder/subfolder2/third.txt','Here is the result : '+text1 +"  "+text2)

const third = readFileSync('./folder/subfolder2/third.txt','utf8')
console.log(third)