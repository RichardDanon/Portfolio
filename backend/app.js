require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

cors(corsOptions)

const endorsement = require('./routes/endorsementController');
const connDb = require('./config/db');

const app = express();
app.use(cors(corsOptions));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/v1/services/endorsementService', endorsement);

async function startApplication() {
    try {
        await connDb.connectToDatabase();
        console.log('Connected to MongoDB');
        //Start listening for requests
        app.listen(8080, function () {
            console.log('Server is running on port 8080');
        });

    } catch (error) {
        console.error('Error starting application:', error);
        process.exit(1); // Exit the application on error
    }
}

// Start the application
startApplication();

// Handle process termination to close the database connection
process.on('SIGINT', async () => {
    try {
        await connDb.closeDatabaseConnection();
        console.log('Disconnected from MongoDB');
        process.exit(0);
    } catch (error) {
        console.error('Error disconnecting from MongoDB:', error);
        process.exit(1);
    }
});
module.exports = app;