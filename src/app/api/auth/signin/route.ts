import userModel from "@/models/User";
import connectToDb from "@/configs/db";
import bcrypt from "bcryptjs"
import { sign } from "jsonwebtoken"
import { serialize } from "cookie";

export const POST = async (req : Request) => {
    try {
        connectToDb()
        const { identify , password } = await req.json()
        if(!identify.trim() || !password.trim()){
            return new Response("Invalid credentials" , {
                status : 422
            })
        }
        
        const user = await userModel.findOne({ $or : [{email : identify} , {username : identify} ] })
        if(!user){
            return new Response("User not Found" , {
                status : 404
            })
        }

        const isValidPassword = await bcrypt.compare(password , user.password)
        if(!isValidPassword){
            return new Response("Password or Username is not correct" , {
                status : 422
            })
        }

        const token = sign({email : user.email , username : user.username } , process.env.PRIVATEKEY || "" , {
            expiresIn : "72h"
        })

        const serialized = serialize("token" , token , {
            httpOnly : true , 
            maxAge : 60 * 60 * 24 * 3,
            path : "/"
        })

        return new Response("User Loged in" , {
            status : 200,
            headers : { "Set-Cookie" : serialized }
        })

    } catch (error) {
        console.log(error);
    }
}