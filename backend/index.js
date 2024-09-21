const express = require('express')
const app = express()
const mongoose = require('mongoose');
const Product = require ('./models/model.js')

mongoose.connect('mongodb+srv://spenxu2002:WOLppLyic1w9hQPS@backend.us1zz.mongodb.net/?retryWrites=true&w=majority&appName=backend')
  .then(() => console.log('Connected!'));
app.listen(3000, ()=>{
    console.log('server is running on port 3000')
})


app.post('/api/product', async (req, res) => {
    try {
        // const test = {"name":"pizza", "password":12344 };
      
        const product = await Product.create(req.body);
        console.log(product);
        res.status(201).json(product); 
    }catch (error){
            res.status(500).json({message: error.message});

    }
}


)
app.get('/api/product', async(req, res) => {
try {
    console.log(req.url)
  const product = await Product.find({})
  res.status(201).json(product); 
}catch (error) {
  res.status(500).json({message: error.message});
}
    
})
app.get('/', function (req, res) {
  res.send('Hello World')
})