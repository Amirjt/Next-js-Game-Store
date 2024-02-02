import connectToDb from "@/configs/db"
import roleChecker from "@/configs/roleChecker"
import userModel from "@/models/User"
import bcrypt from "bcryptjs"

export const GET = async () => {
    const isValid = await roleChecker()

    if(!isValid){
        return Response.json("You are not allowed" , {
            status : 500
        })
    }
    
    connectToDb()
    const users = await userModel.find({})
    return Response.json({users} , {
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
    const {name , userName , email , password , role} = await req.json()
    console.log(name , userName , email , password , role);
    try {
        const existing = await userModel.findOne({ $or: [{username : userName} , {email}]})
        if(existing){
            return Response.json("User already exists" , {
                status : 422
            })
        }

        const hashedPassword = await bcrypt.hash(password , 12)

        await userModel.create({
            name ,
            username : userName ,
            email ,
            password : hashedPassword ,
            role 
        })

        return Response.json({message : "User created!"} , {
            status : 201
        })

    } catch (error) {
        console.log(error);
    }
}