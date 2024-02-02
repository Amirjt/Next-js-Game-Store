import mongoose from "mongoose";

const connectToDb = async () => {
    try {
        if(mongoose.connections[0].readyState){
            return 0
        }
        mongoose.connect(process.env.MONGODB_URI || "")
        console.log("Connected to DB!");
    } catch (error) {
        console.log("error while connecting" + error);
    }
}

export default connectToDb