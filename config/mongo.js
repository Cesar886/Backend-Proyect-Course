const mongoose = require("mongoose");

const dbConnectNoSql = async () => {
  try {
    await mongoose.connect("your_mongo_db_connection_string", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection error:", error);
  }
};

module.exports = dbConnectNoSql;