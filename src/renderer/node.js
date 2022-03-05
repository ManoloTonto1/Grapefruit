const fs = require('fs');


let rawdata = fs.readFileSync('./src/data/settings.json');
let settings = JSON.parse(rawdata);
console.log(settings);