const http = require('http')

const server = http.createServer((req, res)=>{
//req ==Incoming request
if(req.url ==='/'){
    res.end('welcome to my homepage')
//end res
}
else if(req.url ==='/about'){
    res.end('here is our history')
//end res
}else{
    res.end(`<a href="/">Go back</a>`)
}


})


//server port
server.listen(5000)