import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name : {
        type : String ,
        required : true
    },
    email : {
        type : String ,
        required : true
    },
    number : {
        type : String ,
        required : true
    },
    message : {
        type : String ,
        required : true
    }
} , {
    timestamps : true
})


const messageModel = mongoose.models.Message || mongoose.model("Message" , schema)


export default messageModel

