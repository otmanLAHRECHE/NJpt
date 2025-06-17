const { readFile, writeFile } = require('fs')

readFile('./folder/subfolder2/first.txt','utf8', (err, result) =>{
    if(err){
        console.log(err)
        return
    }
    console.log(result)
})