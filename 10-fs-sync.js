const {readFileSync,writeFileSync} = require('fs');

const first  = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');

console.log(first,second);

//creating and writing content in a file
writeFileSync('./content/result-sync.txt',`Here is the result : ${first}, ${second}`);
