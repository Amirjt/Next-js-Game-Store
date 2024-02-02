import userModel from "@/models/User";
import connectToDb from "@/configs/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"
import { sign } from "jsonwebtoken"
import { serialize } from "cookie";

export const POST = async (req : Request) => {
    try {
        connectToDb()

        const { name, userName, email,password } = await req.json()
        if(!name.trim() || !userName.trim() || !email.trim() || !password.trim()  ){
            return new NextResponse("Data is not valid" , {
                status : 422
            })
        }

        const isUserExist = await userModel.findOne({ $or : [{username : userName} , {email}] })
        if(isUserExist){
            return new NextResponse("User already exists" , {
                status : 422
            })
        }

        const hashedPassword = await bcrypt.hash(password , 12)


        const token = sign({email} , process.env.PRIVATEKEY || "" , {
            expiresIn : "72h"
        })

        const serialized = serialize("token" , token , {
            httpOnly : true , 
            maxAge : 60 * 60 * 24 * 3,
            path : "/"
        })

        const users = await userModel.find({})
        
        await userModel.create({name , username : userName , email , password : hashedPassword , role : users.length > 0 ? "USER" : "ADMIN"})
        return new Response(JSON.stringify("User Created") , {
            status : 201,
            headers : { "Set-Cookie" : serialized }
        })
    } catch (error) {
        console.log(error);
    }
}