require("dotenv").config()
const express = require("express")
const cors = require("cors")
const dbConnectNoSql = require('./config/mongo')
const morganBody = require('morgan-body')
const loggerStream = require('./utils/handleLogger'); 
const { dbConnectMySQL } = require("./config/mysql");

const ENGINE_DB = process.env.ENGINE_DB;

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static("storage"))




morganBody(app, {
    noColors: true,
    stream: loggerStream,
    skipt: function (req, res) {
        return res.statusCode < 400
    }
});

const port = process.env.PORT || 3000


// aqui invocamos a las rutas !!
//TODO localhost/api/____
app.use("/api", require("./routes"))

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})

(engine_db == 'nosql') ? dbConnect() : dbConnectMySQL();

dbConnect()