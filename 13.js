const path=require('path')
console.log(path.sep)

const filepath=path.join('/x','y','1.txt')
console.log(filepath)

const base=path.basename(filepath)
console.log(base) 

const absolutepath=path.resolve(__dirname,'x','y','1.txt')
console.log(absolutepath)
