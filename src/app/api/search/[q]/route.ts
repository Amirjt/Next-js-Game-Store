import connectToDb from "@/configs/db"
import productModel from "@/models/Product"

export const GET = async (req : Request  , {params} : {params : any}) => {
   const {q} = params
   connectToDb()
   const data = await productModel.find({ title : {$regex : new RegExp(q , "i")} });
   return Response.json(data) 
}