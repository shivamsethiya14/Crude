import mongoose from "mongoose"

const connectDB=async ()=>{
    try {
        const conncectionInstance= await mongoose.connect(`${process.env.MOGOODB_URI}/Crude`)
        console.log(`\n mongoodb conected!! DB HOST:${conncectionInstance.connection.host}`);
    } catch (error) {
        console.log("mongodb connection error",error);
        process.exit(1)
        
    }
}
export default connectDB;