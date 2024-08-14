require("dotenv").config();
const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const morganBody = require("morgan-body");
const openApiConfigration = require("./docs/swagger");
const loggerStream = require("./utils/handleLogger");
const dbConnectNoSql = require("./config/mongo");
const { dbConnectMySQL } = require("./config/mysql");
const app = express();

const ENGINE_DB = process.env.ENGINE_DB;
// const NODE_ENV = process.env.NODE_ENV || 'development';

app.use(cors());
app.use(express.json());
app.use(express.static("storage"));

morganBody(app, {
  noColors: true,
  stream: loggerStream,
  skip: function (req, res) {
    return res.statusCode < 400;
  },
});

// prueba en actions

const port = process.env.PORT || 3000;

app.use( '/documentation', swaggerUi.serve, swaggerUi.setup(openApiConfigration) );

app.listen(port, () => {
  console.log("🚀 ~ app.listen ~ port:", port)
});


app.use("/api", require("./routes"));

(ENGINE_DB === 'nosql') ? dbConnectNoSql() : dbConnectMySQL();

module.exports = app;