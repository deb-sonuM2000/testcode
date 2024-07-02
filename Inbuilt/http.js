let http = require('http')

//req> what we send th the server(params,queryParams,body)
//res> what server send in return
let server = http.createServer((req,res)=>{
     res.write('<h1>this is node js server code program')
     res.end()
})
server.listen(5000)