const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        console.log('initiating connection to mongoDB...')
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useFindAndModify: true
        });

        console.log(`MongoDB successfully connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit();
    }
};

module.exports = { connectDB };
