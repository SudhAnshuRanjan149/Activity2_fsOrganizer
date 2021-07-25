let fs = require("fs");
let path = require("path");

let types = {
    media: ["mp4", "mkv"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"]
}


function fileOrganizer(src){

// let inputPath = "C:\\Users\\0103e\\Desktop\\PepCoding\\WEB DEV\\Activity2_fsOrganizer_25-7-21\\New folder"
let inputPath = src;
let all = fs.readdirSync(inputPath);
//console.log(all);

let organizedPath = path.join(inputPath,"Organised");
let mediaPath = path.join(organizedPath,"media");
let archivesPath = path.join(organizedPath,"archives");
let documentsPath = path.join(organizedPath,"documents");
let appPath = path.join(organizedPath,"app");
let otherPath = path.join(organizedPath,"other");

if(fs.existsSync(organizedPath)==false){
    fs.mkdirSync(organizedPath);

    fs.mkdirSync(mediaPath);
    fs.mkdirSync(archivesPath);
    fs.mkdirSync(documentsPath);
    fs.mkdirSync(appPath);
    fs.mkdirSync(otherPath);
}

for(let i =0;i<all.length;i++){
    let entity = all[i];
    //console.log(entity);
    let fullPath = path.join(inputPath,entity);
    let statsOfPath = fs.lstatSync(fullPath);
    if(statsOfPath.isFile()){
        //console.log(fullPath);
        let extWithDot = path.extname(fullPath);
        let extSplit = extWithDot.split(".");
        let ext = extSplit[1];

        for(let j=0;j<types.media.length;j++){
            if(ext == types.media[j]){
                let srcPath = fullPath;
                let destDir = mediaPath;
                let tobeCopiedFileName = path.basename(srcPath);
                let destPath = path.join(destDir,tobeCopiedFileName);
                fs.copyFileSync(srcPath,destPath);
                console.log("media file copied");
            }
        }
        for(let j=0;j<types.archives.length;j++){
            if(ext == types.archives[j]){
                let srcPath = fullPath;
                let destDir = archivesPath;
                let tobeCopiedFileName = path.basename(srcPath);
                let destPath = path.join(destDir,tobeCopiedFileName);
                fs.copyFileSync(srcPath,destPath);
                console.log("arc file copied");
            }
        }
        for(let j=0;j<types.documents.length;j++){
            if(ext == types.documents[j]){
                let srcPath = fullPath;
                let destDir = documentsPath;
                let tobeCopiedFileName = path.basename(srcPath);
                let destPath = path.join(destDir,tobeCopiedFileName);
                fs.copyFileSync(srcPath,destPath);
                console.log("doc file copied");
            }
        }
        for(let j=0;j<types.app.length;j++){
            if(ext == types.app[j]){
                let srcPath = fullPath;
                let destDir = appPath;
                let tobeCopiedFileName = path.basename(srcPath);
                let destPath = path.join(destDir,tobeCopiedFileName);
                fs.copyFileSync(srcPath,destPath);
                console.log("app file copied");
            }
        }
        console.log("****************************************")
        
    }
}

}

//fileOrganizer();

// function organizeFn(src) {
//     console.log("-->organize  command executed with path: --->  " + src);
//     // code 

// }
module.exports = {
    organizefxn: fileOrganizer
}