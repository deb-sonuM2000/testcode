let express = require('express')
let categoryRouter = express.Router()


const category = [ {
          "id": 18,
          "title": "MBJ Women's Solid Short Sleeve Boat Neck V ",
          "price": 9.85,
          "description": "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
          "category": "women's clothing",
          "image": "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
          "rating": {
                    "rate": 4.7,
                    "count": 130
          }
},
{
          "id": 19,
          "title": "Opna Women's Short Sleeve Moisture",
          "price": 7.95,
          "description": "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
          "category": "women's clothing",
          "image": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
          "rating": {
                    "rate": 4.5,
                    "count": 146
          }
},
{
          "id": 20,
          "title": "DANVOUY Womens T Shirt Casual Cotton Short",
          "price": 12.99,
          "description": "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
          "category": "women's clothing",
          "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
          "rating": {
                    "rate": 3.6,
                    "count": 145
          }
}
]

categoryRouter.route('/')
          .get((req,res)=>{
                    res.send(category)
          })

categoryRouter.route('/details')
          .get((req,res)=>{
                    res.send('Category Details')
          })

module.exports = categoryRouter