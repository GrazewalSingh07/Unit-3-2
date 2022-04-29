const express=require("express");
const mongoose=require("mongoose");
let app=express();


//connect to mongodb
// this connection is an asynchronous function 
const connectDB=()=>{
    mongoose.connect("mongodb://127.0.0.1:27017/web15")
}


//create schema is structure for our data base
const movieSchema=new mongoose.Schema({
    id:Number,
    first_name:{type: String,required:true},
    last_name:{type:String, required:false},
    email:{type:String,required:true,unique:true},
    gender:{type:String,required:true},
    
})
//model alternative=> to db.user.find()

const Movie=mongoose.model("movie",movieSchema)
// movie is collection name it csn be singular form or prural form
//name of the model has to be in capital letter start

app.get("/movies",async (req,res)=>{
   const movie=await Movie.find({},{movie_name:1}).lean().exec()
   //lean converts mongose document to nornal js object way lean makes it light and fast
   //exec stops the telss that the promise is complete
//    console.log(movie)
   return  res.send(movie)
})

 





app.listen(4320,async()=>{
    try {
        await connectDB()
        // connecting data base
    } catch (error) {
        console.log(error)
    }
  
    console.log("Listening on Grazewal's ports");
})