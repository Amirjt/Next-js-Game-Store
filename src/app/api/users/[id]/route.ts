import connectToDb from "@/configs/db"
import roleChecker from "@/configs/roleChecker"
import userModel from "@/models/User"

export const DELETE = async (req : Request , {params} : {params : any}) => {
    const isValid = await roleChecker()

    if(!isValid){
        return Response.json("You are not allowed" , {
            status : 500
        })
    }

    connectToDb()
    const {id} = params
    
    try {
        await userModel.findByIdAndDelete(id)
        return Response.json({message : "User deleted"} , {
            status : 200
        })
    } catch (error) {
        console.log(error);
    }

}