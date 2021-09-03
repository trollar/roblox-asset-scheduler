// The code is a bit bad but it works...

const noblox = require('noblox.js')
var prompt = require('prompt-sync')();
var fs = require("fs")
const { setTimeout } = require('timers/promises');

async function main() {

var Name = prompt('Please enter a asset name ');
var filepath = prompt('Please enter the filepath ')
var TimeInMilliseconds = prompt('Please enter a time [in miliseconds] '); // enter a time to wait for in miliseconds
var Cookie = prompt('Please enter your cookie ');
var CatalogId = prompt('Please enter the asset type number ') // get them at https://developer.roblox.com/en-us/api-reference/enum/AssetType
console.log("file scheduled to upload")
const currentUser = await noblox.setCookie(Cookie) 
await setTimeout(TimeInMilliseconds)
console.log("uploaded the asset")
console.log(`Logged in as ${currentUser.UserName} [${currentUser.UserID}]`)
noblox.uploadItem(`${Name}`, CatalogId, fs.createReadStream(filepath))
}

main()
