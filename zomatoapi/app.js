let express = require('express')
let app = express()
let mongo = require('mongodb')
let MongoClient = mongo.MongoClient
let dotenv = require('dotenv')
dotenv.config()
let MongoURL = process.env.MongoURL
let bodyParser = require('body-parser')
let cors = require('cors')
let port = process.env.port
let db
let authkey = process.env.AuthKey

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors())

const auth=(key)=>{
          if(key == authkey){
                    return true
          }else{
                    return false
          }
}



app.get('/',(req,res)=>{
          res.status(200).send('Hello Node')
})

//list of products
app.get('/product',(req,res)=>{
          //let key = req.query.key
          let key = req.header('x-basic-token')
          if(auth(key)){
          db.collection('products').find().toArray((err,data)=>{
                    if(err) throw err;
                    res.status(200).send(data)
          })
    }else{
          res.status(403).send('Not Authenticated')
    }
})

app.get('/restrauntt',(req,res)=>{
          let query = {}
          let rating = Number(req.query.rating)
          let type_of_food = String(req.query.type_of_food)
          if(rating && type_of_food){
                    query = {rating:rating,
                              type_of_food:type_of_food
                    }
          }else if(rating){
                    query = {rating:rating}
          }
          
          else if(type_of_food){
                    query = {type_of_food:type_of_food}
          }
         else{
          query={}
         }
          db.collection('restraunt').find(query).toArray((err,data)=>{
                    res.status(200).send(data)
          })
})

//address of rest

MongoClient.connect(MongoURL,(err,client)=>{
          if(err)console.log('Error while connecting to Mongodb');
          db = client.db('fakestore')
          app.listen(port,()=>{
                    console.log(`Running on port ${port}`);
          })
})