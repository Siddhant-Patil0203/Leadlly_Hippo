import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({
    title:{
        type:String,
    },
    img:{
        type:String,
    },
    price:{
        type:Number
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Users",
        required:true,
    }
})

export default mongoose.model("Products", productsSchema);
