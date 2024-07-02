let express = require('express')
let app = express()
let dotenv = require('dotenv')
dotenv.config()
let morgan = require('morgan')
let fs = require('fs')
let port =process.env.PORT || 6700
let categoryRouter = require('./src/controller/CategoryRouter')
let productRouter = require('./src/controller/ProductRouter')

//middleware
app.use(morgan('common',{stream:fs.createWriteStream('./app.log')}))

//static file path
app.use(express.static(__dirname+'/public'))
//html file path
app.set('views','./src/views')
//view engine
app.set('view engine','ejs')

//default route
app.get('/', (req,res)=>{
          //res.send('hii express')
          res.render('index',{title:'this is ejs code file program'})
})


app.use('/category',categoryRouter)
app.use('/products',productRouter)

app.listen(port,(err)=>{
          if(err) throw err
          else{
                    console.log(`server running on port ${port}`);
          }
})