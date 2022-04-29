 const express=require("express")
 
 const app=express();


//get:- retrive a list of something or a single item
///post:-save something on the serveer or the database
//put/patch:put is used to update any item----- replaces the item and patch appends to it
// delete:when you want to delete an item



// app.use(logger);
app.use(express.json())


 app.get("/",function(req,res){
 return  res.send("Hellow !!!! ITS GRAZEWAL Again");
  // next();
 })


 // middleware to parse request body it happens in between req and res 
 app.post("/",(req,res)=>{
  //  console.log("req.body", req.body)
  //  console.log("HomePage Post Request")
  return res.status(201).json(req.body)
 });

//  function logger(req,res,next){
//    console.log("logging before")
//    next();
//    console.log("logging after")
//  }
//  app.get("/books",function(req,res){
//    res.send({a:"book1", b:"book2",c:"book3",d:"book4",e:"book5"})
//  })
 app.listen(4001,()=>{
   console.log("Listening on port 4001")
 })