import connectToDb from "@/configs/db"
import roleChecker from "@/configs/roleChecker"
import productModel from "@/models/Product"


export const PUT = async (req : Request , {params} : {params : any} ) => {
    const isValid = await roleChecker()

    if(!isValid){
        return Response.json("You are not allowed" , {
            status : 500
        })
    }

    const {title , price , rating , category , image , desc} = await req.json()

    const {id} = params

    await productModel.findByIdAndUpdate(id , {
        title , price , rating , category , image , desc
    })
    
    return Response.json({message : "Product Updated"} , {
        status : 200
    })

}

export const DELETE = async (req : Request , {params} : {params : any} ) => {
    const isValid = await roleChecker()

    if(!isValid){
        return Response.json("You are not allowed" , {
            status : 500
        })
    }

    const {id} = params

    await productModel.findByIdAndDelete(id)

    return Response.json({message : "Product Deleted"} , {
        status : 200
    })

}