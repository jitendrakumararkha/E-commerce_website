const express=require('express');
require("./db/config");
 const User=require("./db/User");
 const AddProduct_list=require("./db/Add_product");
const app=express();
const cors=require('cors');
app.get('/',(req,res)=>{
   res.send("app is runnning");

});
app.use(express.json());
app.use(cors());
app.post("/register",async(req,res)=>{
     
   let user= new User(req.body);
       let result=await user.save();
       result=result.toObject();
       delete result.password;
    res.send(result);
});

app.post('/login',async (req,res)=>{
    
    if(req.body.password && req.body.email){
    let user= await User.findOne(req.body).select("-password");
    if(user) res.send(user);
    else  res.send({result:'no user found'});
    }
    else  res.send({result:'no user found'});
});

app.post('/addProduct',async(req,res)=>{
     let product=new AddProduct_list(req.body);
     let result=await product.save();
  res.send(result);
});
app.get('/product_list',async(req,res)=>{
        
    let products_list=await AddProduct_list.find();
    if(products_list.length>0){
        res.send(products_list);
    }else{
        res.send({result:"No product found"});
    }
});
app.delete('/product_list/:id',async(req,res)=>{
         
    let result=await AddProduct_list.deleteOne({_id:req.params.id})
    res.send(req.params.id);

});

app.get('/product_list/:id',async(req,res)=>{
   
        let result=await AddProduct_list.findOne({_id:req.params.id});
        if(result) res.send(result);
        else res.send({result:"No Record Found"});
});
app.get('/search/:key',async(req,res)=>{
               let result=await AddProduct_list.find({
                 "$or":[
                     {name:{$regex:req.params.key}},
                    // {price:{$regex:req.params.key}},
                     {category:{$regex:req.params.key}},
                     {company:{$regex:req.params.key}}

                 ]

               });
               res.send(result);
})
app.listen(5000,(req,res)=>{

    console.log("app is running");
});