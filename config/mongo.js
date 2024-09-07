const mongoose = require('mongoose');

const dbConnectNoSql = async () => {
  const DB_URI = process.env.DB_URI;  
  try {
    await mongoose.connect(DB_URI);  
    console.log('MongoDB connected');
  } catch (err) {
    console.log('Database connection error:', err);
  }
};

module.exports = dbConnectNoSql;
