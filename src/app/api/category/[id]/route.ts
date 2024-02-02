import connectToDb from "@/configs/db"
import categoryModel from "@/models/Category"

export const DELETE = async (req : Request , {params} : { params : any}) => {
   connectToDb()
   await categoryModel.findByIdAndDelete(params.id)
   return Response.json({message : "Category deleted"} , {
    status : 200
   })
}

export const PUT = async (req : Request , {params} : {params : any}) => {
   const body = await req.json()
   connectToDb()
   await categoryModel.findByIdAndUpdate(params.id , body)
   return Response.json({message : "Category Updated"} , {
      status : 200
     })
}