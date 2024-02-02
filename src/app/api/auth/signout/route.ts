import { serialize } from "cookie";

export const GET = async () => {
    const serialized = serialize("token" , "" , {
        maxAge : 0 ,
        path : "/"
    })

    return new Response(JSON.stringify("User Logged out") , {
        status : 200,
        headers : { "Set-Cookie" : serialized },
    })
}