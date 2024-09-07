require("dotenv").config();
const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const openApiConfigration = require("./docs/swagger");
const dbConnectNoSql = require("./config/mongo");
const { dbConnectMySQL } = require("./config/mysql");
const app = express();

const ENGINE_DB = process.env.ENGINE_DB;
// const NODE_ENV = process.env.NODE_ENV || 'development';

app.use(cors());
app.use(express.json());
app.use(express.static("storage"));

// prueba en actions

const port = process.env.PORT || 3000;

app.use( '/documentation', swaggerUi.serve, swaggerUi.setup(openApiConfigration) );

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});


app.use("/api", require("./routes"));

(ENGINE_DB === 'nosql') ? dbConnectNoSql() : dbConnectMySQL();

module.exports = app;