const mongoose = require("mongoose");

const connect = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("Connected to MongoDB ");
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

module.exports = connect; // مهم جداً



