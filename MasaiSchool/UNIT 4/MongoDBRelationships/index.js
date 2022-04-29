const express= require("express");
const mongoose= require("mongoose");
 

const app=express();
app.use(express.json());// it cnverted the json body to js object
//connecting to mongodb
const connectDB=()=>{
  mongoose.connect("mongodb://127.0.0.1:27017/web15")
} 


// making schema baically giving structure

const userSchema=new mongoose.Schema({
    // _id:{type:Number, required:true},
    first_name:{type:String, required:true},
    last_name:{type:String, required:false},
    email:{type:String, required:true},
    gender:{type:String, required:true}
})


//creating model 
const User=mongoose.model("user", userSchema)

// 
///postSchema
const postSchema= new mongoose.Schema(
    {
    title:{type:String,required:true},
    body:{type:String, required:true},
    userId:{type:mongoose.Schema.Types.ObjectId, ref:"user", required:true}

    },
    {
        timestamps:true,
    }
)
//creating model for post
const Post=mongoose.model("post",postSchema)

//comment schema

const commentSchema=new mongoose.Schema(
    {
        body:{type:String, required:true},
        postId:{type:mongoose.Schema.Types.ObjectId, 
            ref:"post",
            required:true}
    },
    {
    userId:{type:mongoose.Schema.Types.ObjectId,
         ref:"user",
          required:true}

    },  
    
    {
        timestamps:true
    }
    )

// /comment model
const Comment=mongoose.model("comment", commentSchema)



app.get("/users",async (req,res)=>{
    try {
        const userData=await User.find({}).lean().exec();
        console.log(userData)
        return res.status(200).send({userData})
    } catch (error) {
       return res.status(500).send({message:"Something went wrong try agin later"})
    }

})


app.post("/users",async(req,res)=>{
    try {
        const user=await User.create(req.body);
        return res.status(201).send({user})
    } catch (error) {
        console.log(error)
    }
})
// in line 91 id is variable and it can be any thing and we have to
// use same variable in line 3 after params


//  for post requests the are provided by express
//body=>req.body
//url=>req.params
//query string=> req.query










app.get("/users:id/",async (req,res)=>{
    try {
        const userData=await User.findById(req.params.id);
        // console.log(userData)
        return res.status(200).send({userData})
    } catch (error) {
       return res.status(500).send({message:"Something went wrong try agin later"})
    }

})




app.patch("/users:id/",async (req,res)=>{
    try {
        const userData=await User.findByIdAndUpdate(req.params.id,req.body,{new:true});
        
        return res.status(200).send({userData})
    } catch (error) {
       return res.status(500).send({message:"Something went wrong try agin later"})
    }

})


app.delete("/users/:id",async (req,res)=>{
    try {
        const userData=await User.findByIdAndDelete(req.params.id).lean().exec();
        
        return res.status(200).send({userData})
    } catch (error) {
       return res.status(500).send({message:"Something went wrong try agin later"})
    }

})


app.get("/posts",async (req,res)=>{
    try {
        const posts=await Post.find({}).lean().exec();
        // console.log(userData)
        return res.status(200).send(posts)
    } catch (error) {
       return res.status(500).send({message:"Something went wrong try agin later"})
    }

})

app.post("/post",async(req,res)=>{
    try {
        const post=await Post.create(req.body);
        return res.status(201).send(post)
    } catch (error) {
        console.log(error)
    }
})


app.get("/post/:id",async (req,res)=>{
    try {
        const post=await Post.findById(req.params.id);
        // console.log(userData)
        return res.status(200).send(post)
    } catch (error) {
       return res.status(500).send({message:"Something went wrong try agin later"})
    }

})




app.patch("/post/:id",async (req,res)=>{
    try {
        const post=await Post.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
        
        return res.status(200).send(post)
    } catch (error) {
       return res.status(500).send({message:"Something went wrong try agin later"})
    }

})


app.delete("/post/:id",async (req,res)=>{
    try {
        const post=await Post.findByIdAndDelete(req.params.id).lean().exec();
        
        return res.status(200).send(post)
    } catch (error) {
       return res.status(500).send({message:"Something went wrong try agin later"})
    }

})

app.listen(4444,async()=>{
    try {
        await connectDB();
        console.log("You are on Grazewal's server");
    } catch (error) {
        console.log(error)
    }
   
})