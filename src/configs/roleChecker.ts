import { verify } from "jsonwebtoken"
import { cookies } from "next/headers"
import connectToDb from "./db"
import userModel from "@/models/User"

const roleChecker = async () => {
    let isValid = false
    const cookiesStore = cookies()
    const token = cookiesStore.get("token")
    if(!token){
        return isValid
    }
    const verified = verify(token.value , process.env.PRIVATEKEY || "")
    if(!verified){
        return isValid
    }    

    await connectToDb()
    const user = await userModel.findOne({email : verified.email})

    if(!user){
        return isValid
    }

    if(user.role === "ADMIN") {
        isValid = true
        return isValid
    }

}

export default roleChecker