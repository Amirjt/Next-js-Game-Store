import mongoose from "mongoose";

const schema = new mongoose.Schema({
   title : {
    type : String ,
    required : true ,
   },
   price : {
    type : String ,
    required : true
   },
   rating : {
    type : String ,
    required : true
   },
   category : {
    type : String,
    required : true
   },
   image : {
      type : String ,
      required : true
   },
   desc : {
    type : String ,
    required : true
   },
   isFeatured : {
      type : Boolean ,
      required : true,
      default : false
   } 

} , {
   timestamps : true
})

const productModel = mongoose.models.Product || mongoose.model("Product" , schema)

export default productModel