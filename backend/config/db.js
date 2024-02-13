const mongoose = require('mongoose');
const uri = process.env.DATABASE_URI;

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function connectToDatabase() {
    try {
        await mongoose.connect(uri, clientOptions);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
        throw error;
    }
}

async function closeDatabaseConnection() {
    try {
        await mongoose.connection.close();
        console.log("Disconnected from MongoDB");
    } catch (error) {
        console.error("Error disconnecting from MongoDB:", error.message);
        throw error;
    }
}

module.exports = { connectToDatabase, closeDatabaseConnection };