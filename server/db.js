import mongoose from "mongoose";

 const connectDB = async () => {
    try {
        console.log('URI: ',process.env.MONGO_URI)
        await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected:`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}

export default connectDB