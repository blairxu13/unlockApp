const mongoose = require('mongoose');
const ProductSchema = mongoose.Schema (
    {
         name: {
            type: String,
            required : [true, "please enter username" ]
         },
         password: {
            type: Number,
            required : [true, "please enter a password"]

         }
    },
    {
        timestamps: true,
    }

)
const Product = mongoose.model("Product", ProductSchema)
module.exports = Product