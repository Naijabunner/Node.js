const {readFileSync, writeFileSync} = require('fs')
//Default encoding is utf
const first= readFileSync('./content/first.txt', 'utf8')
const second= readFileSync('./content/subfolder/text.txt', 'utf8')

//creating a neew file
//If thee file doesn't exist Node will create one but if its already there node will override all the values in the file
writeFileSync('./content/result-sync.txt', `Here is the result :${first}, ${second}`, {flag:'a'})
//flag :'a' will create a second value in the file