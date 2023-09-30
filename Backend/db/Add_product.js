const mongoose=require('mongoose');

 const AddProductSchema=new mongoose.Schema({

        name:String,
        price:Number,
        category:String,
        user_id:String,
        company:String
    });

    module.exports=mongoose.model("add_products",AddProductSchema);