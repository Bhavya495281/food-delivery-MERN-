import mongoose from "mongoose";
export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://foodwebsite:bhavi123@cluster0.ul7sao0.mongodb.net/?appName=Cluster0/food-del');
        console.log("DB Connected Successfully");
    } catch (error) {
        console.error("DB Connection Error:", error.message);
        process.exit(1);
    }
};