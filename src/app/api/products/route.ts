import connectToDb from "@/configs/db"
import productModel from "@/models/Product"
import roleChecker from "@/configs/roleChecker"

export const GET = async () => {

    connectToDb()
    const products = await productModel.find({})
    return Response.json(products , {
        status : 200
    })
}

export const POST = async (req : Request) => {
   const isValid = await roleChecker()

   if(!isValid){
       return Response.json("You are not allowed" , {
           status : 500
       })
   }

   connectToDb()
   const {title , price , rating , category , image , desc} = await req.json()

   if(!title || !price || !rating || !category || !image || !desc){
     return Response.json({message : "Something went wrong"} , {
        status : 500
     })
   }

   const newProduct = {
      title , 
      price ,
      rating ,
      category, 
      image ,
      desc
   }

   await productModel.create(newProduct)

   return Response.json({message : "Product Created"} , {
    status : 201
   })
   
}