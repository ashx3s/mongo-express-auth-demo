const mongoose = require("mongoose");

async function connectToDatabase(database) {
  try {
    const connection = await mongoose.createConnection(process.env.MONGO_URI, {
      dbName: database,
    });
    return connection;
  } catch (error) {
    console.error("Mongo Connection Error", error);
    throw error;
  }
}

module.exports = connectToDatabase;
