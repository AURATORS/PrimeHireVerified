import mongoose from "mongoose";
//comments
const connect = async () => {
    try {
        console.log("Attenmpting to connect db...");
        await mongoose.connect(process.env.MONGO_URI,{});
        console.log("Conneted to Database..!");
    } catch (error) {
        console.log("Failed to connect to dbase",error.message);
        process.exit(1);
    }
};


export default connect;