require("dotenv").config();
const { MONGO_URI } = process.env;

const mongoose = require("mongoose");

module.exports = async () => {
    try {
        await mongoose.connect(MONGO_URI);
    }
    catch (error) {
       throw error; 
    }
};