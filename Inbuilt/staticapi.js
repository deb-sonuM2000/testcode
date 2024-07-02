let fs = require('fs')
let http = require('http')

let server = http.createServer((req,res)=>{
          fs.readFile('fruits.json','utf-8',(err,data)=>{
                    if(err) throw err
                    //return data of filr
                    res.write(data)
                    res.end()
          })
})
server.listen(6300)