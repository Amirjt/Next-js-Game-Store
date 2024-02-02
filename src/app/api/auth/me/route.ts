import connectToDb from "@/configs/db"
import userModel from "@/models/User"
import { verify } from "jsonwebtoken"
import { cookies } from "next/headers"

export const GET = async () => {
    const cookiesStore = cookies()
    const token = cookiesStore.get("token")
    if(!token){
       return Response.json("Nothing" , {
        status : 500
       })
    }else {
        connectToDb()
        const verified = verify(token.value , process.env.PRIVATEKEY || "")
        if(!verified){
            return Response.json("Wrong token" , {
                status : 404
            })
        }
        const user = await userModel.findOne({ email : verified?.email } , "name username email role , -_id")        
        return Response.json(user , {
            status : 200
        })
    }
}