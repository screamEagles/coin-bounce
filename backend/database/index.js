const mongoose = require('mongoose');
const {MONGODB_CONNECTION_STRING} = require('../config/index');

// const connectionString = "mongodb+srv://bugAuthor:coinbounce@cluster0.knnvdfd.mongodb.net/coin-bounce?retryWrites=true&w=majority&appName=Cluster0";

const dbConnect = async () => {
    try {
        mongoose.set('strictQuery', false);
        const conn = await mongoose.connect(MONGODB_CONNECTION_STRING);
        console.log(`Database connected to host: ${conn.connection.host}`);
    } catch (error) {
        console.log(`Error: ${error}`);
    }
}

module.exports = dbConnect;