import connectToDb from "@/configs/db"
import categoryModel from "@/models/Category"


export const GET = async () => {
    connectToDb()
    const categories = await categoryModel.find({})
    return Response.json(categories , {
        status: 200,
    })
}


export const POST = async (req : Request) => {
    connectToDb()

    const {name} = await req.json()

    if(!name.trim()){
        return Response.json({message : "Invalid Request"}, {
            status : 500
        })
    }

    await categoryModel.create({
        name
    })
    
    return Response.json({message : "Category Created"} , {
        status : 201
    })

}