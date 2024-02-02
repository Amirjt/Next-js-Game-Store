import roleChecker from "@/configs/roleChecker"
import productModel from "@/models/Product"

export const PUT = async (req : Request , {params}  : {params : any}) => {
    const isValid = await roleChecker()

    if(!isValid){
        return Response.json("You are not allowed" , {
            status : 500
        })
    }


    const body = await req.json()
    
    
    await productModel.updateMany({} , {isFeatured : false})
    await productModel.findByIdAndUpdate(params.id , body )
    


    return Response.json({message : "Updated"} , {
        status : 200
    })
 
}