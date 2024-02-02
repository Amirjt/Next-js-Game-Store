import mongoose from "mongoose";
import productModel from "./Product";

const schema = new mongoose.Schema({
    user: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    product: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'Product',
    },
} , {
    timestamps : true
})


const commentSchema = mongoose.models.Comment || mongoose.model("Comment" , schema)

export default commentSchema