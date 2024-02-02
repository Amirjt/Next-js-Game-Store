import connectToDb from "@/configs/db"
import roleChecker from "@/configs/roleChecker"
import messageModel from "@/models/Message"


export const DELETE = async (req : Request , {params} : {params : any}) => {
    const isValid = await roleChecker()

    if(!isValid){
        return Response.json("You are not allowed" , {
            status : 500
        })
    }

    connectToDb()
    await messageModel.findByIdAndDelete(params.id)
    return Response.json({message : "Message Deleted" }, {
        status : 200
    })
}