const fs = require('fs')
//includes code from trilogy learning fullstack developer course

const writeFile = function(fileContent){
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            if (err){
                reject(err)
                return
            }
            resolve({
                ok:true,
                message: "file created"
            })
        })
    })
}


const copyFile = copyFile => {
    return new Promise((resolve, reject)=> {
        fs.copyFile('./src/style.css', './dist/style.css', err =>{
            if (err){
                reject(err);
                return
            } resolve({
                ok:true,
                message: "file copied"
            })
        })
    })
}


module.exports = {writeFile:writeFile, copyFile: copyFile}