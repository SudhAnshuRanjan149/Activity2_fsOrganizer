let fs = require("fs");
let path = require("path");

let str = "tree command executed"
function treefn(src){
    console.log("tree command executed with path -->>" + src)

    let inputPath = src;
    let all = fs.readdirSync(inputPath);

    let FolderName = path.basename(inputPath);
    console.log("--"+FolderName);

    for(let i =0;i<all.length;i++){
        let entity = all[i];
        //console.log(entity);
        let fullPath = path.join(inputPath,entity);
        let statsOfPath = fs.lstatSync(fullPath);
        if(statsOfPath.isFile()){
            //console.log(fullPath);
            let FileName = path.basename(fullPath);
            console.log("   |--"+FileName);
        }
    }   
}

module.exports = {
    strans: str,
    funTree : treefn
}