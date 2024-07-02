const express = require('express')
const app = express()
const {MongoClient} = require('mongodb')
const url = "mongodb://localhost:27017"
const client = new MongoClient(url)
async function main(){
          await client.connect()
}
const collection = client.db('mydatabase').collection('customers')
const bodyParser = require('body-parser')
const cors = require('cors')
const port = 4000



app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors())

app.get('/data',(req,res)=>{
  res.send('OK Data')
})
//insert user
app.post('/adduser',async(req,res)=>{
          await collection.insertOne(req.body)
          res.send('Data Added Successfully')
})

//get users
app.get('/users',async(req,res)=>{
          const output = []
          let query = {}
          if(req.query.address){
                    query = {
                              address:req.query.address
                    }
          }
          const cursor = collection.find(query)
          for await (const data of cursor){
                    output.push(data)
          }
          cursor.closed
          res.send(output)
})



app.listen(port,()=>{
          main()
          console.log('server running on port 4000');
})