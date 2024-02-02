
import connectToDb from "@/configs/db";
import roleChecker from "@/configs/roleChecker";
import messageModel from "@/models/Message";



export const GET = async () => {
    const isValid = await roleChecker()

    if(!isValid){
        return Response.json("You are not allowed" , {
            status : 500
        })
    }

    const messages = await messageModel.find({})

    return Response.json({messages} , {
        status : 200
    })

}

export const POST = async (req : Request) => {
    const { name, email , number , message } = await req.json()
    if(!name || !email || !number || !message){
        return Response.json({message : "Invalid Request" }, {
            status : 500
        });
    }

    connectToDb()

    await messageModel.create({
        name,
        email,
        number,
        message
    })

    return Response.json({message : "Message Sended" }, {
        status : 200
    });


}