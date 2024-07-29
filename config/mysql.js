const { Sequelize } = require('sequelize');

const database = process.env.MYSQL_DATABASE;
const username = process.env.MYSQL_USER;
const password = process.env.MYSQL_PASSWORD;
const host = process.env.MYSQL_HOST;

const sequelize = new Sequelize(
    database,
    username,
    password,
    {
        host,
        dialect: 'mysql',
    }
);


const dbConnectMySQL = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (e) {
        console.log("🚀 ~ dbConnectMySQL ~ e:", e)
        
    }
};

module.exports = { sequelize, dbConnectMySQL };
