import mongoose from "mongoose";

const connectDB = () => {
    const connect = mongoose.connect(process.env.MONGO_URI , {
        dbName: "Real-ESTATE"
    }).then(() => {
        console.log("Database is connected")
    }).catch((error) => {
        console.log(error)
    })
}

export default connectDB