import mongoose from "mongoose";

// const URI = process.env.MONGO_URI || "mongodb+srv://talha:TalhaKiDB@devido.i62fufo.mongodb.net/"
const URI = "mongodb+srv://talha:TalhaKiDB@devido.i62fufo.mongodb.net/"
const connectDB = async () => {
    try {
        console.log('URI: ', URI)
        await mongoose.connect(URI);
        console.log(`MongoDB Connected:`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}

export default connectDB