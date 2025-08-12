const mongoose = require('mongoose');

const URI = "mongodb://localhost:27017/blog-app";

const connectDb = async ()=>{
    try {
        await mongoose.connect(URI);
        console.log("Connection succesfull");
    } catch (error) {
        console.log(error);
        process.exit(0);
    }
}

module.exports = connectDb;