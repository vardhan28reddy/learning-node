const {readFile,writeFile}=require('fs')

console.log("start")
readFile('./x/first.txt','utf8',(err,result)=>{
	if(err)
	{
		console.log(err)
		return;
	}
	const first=result
	readFile('./x/second.txt','utf8',(err,result)=>{
	if(err)
	{
		console.log(err)
		return;
	}
	const second=result
	writeFile('./x/result-async.txt',`here is the result : ${first} ${second}`,(err,result)=>{
		if(err)
		{
			console.log(err)
			return;
		}
		console.log("done with this task")
	}
	)
})})
console.log("stating new task")//gives opportunity to another task
