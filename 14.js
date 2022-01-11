const {readFileSync,writeFileSync}=require('fs')
console.log("start")
const first=readFileSync('./x/first.txt','utf8')
const second=readFileSync('./x/second.txt','utf8')

console.log(first,second)

writeFileSync('./x/result-sync.txt',`here is the result:${first} ${second}`)//overwrites the existing data

writeFileSync('./x/result-sync.txt',`here is the result:${first} ${second}`,{flag:'a'})//to append the data
console.log("done with this task")
console.log("stating new task")
