const {readfileSync, writeFileSync, readFileSync} = require('fs')

//reading file
const first = readFileSync('./content/first.txt','utf-8')
const second = readFileSync('./content/second.txt','utf-8')

console.log(first);
console.log(second);

//creating a new file,
writeFileSync(
    './content/result-sync.txt',
    `Here is the result : ${first}, ${second}`,
    {flag: 'a'} //append, will not overwrite
    )

