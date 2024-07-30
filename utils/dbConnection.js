import mongoose from "mongoose";

const dbConnection = async() =>{
    mongoose.connect(process.env.DB_URI)
}

export default dbConnection;