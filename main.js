let organizeObj = require("./organize");
let treeObj = require("./tree")

let inputArr = process.argv.slice(2);
let command = inputArr[0];
switch (command) {
    case "organize":
        organizeObj.organizefxn(inputArr[1])
        break;
    case "tree":
        treeObj.funTree(inputArr[1]);
        break;
    default:
        console.log("🙏 kindly enter the correct cmd");
        break;
}
