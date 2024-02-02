import connectToDb from "@/configs/db"
import commentModel from "@/models/Comment"



export const GET = async () => {
    connectToDb()
    const comments = await commentModel.find({}).populate("product")
    return Response.json(comments, {
        status : 200
    })
}


export const POST = async (req : Request) => {
    const {product , user , text} = await req.json()

    if(!product || !user || !text){
        return Response.json({message : "Invalid Request"} , {
            status : 500
        })
    }

    const newComment = {product , user , text};

    await commentModel.create(newComment)

    return Response.json({message : "Comment created"} , {
        status : 201
    })

}