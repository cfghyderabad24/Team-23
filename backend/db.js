const mongoose = require("mongoose");
const connectDb = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://namasricharan:EgGLHeEDBbIAfRWV@cluster0.8l7gvbr.mongodb.net/cfg", {

        }
        );


        console.log("MongoDB connected");
    } catch (error) {
        console.error("MongoDB connection failed:", error);
        process.exit(1);
    }
};

module.exports = connectDb;