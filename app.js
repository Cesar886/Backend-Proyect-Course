require("dotenv").config()
const express = require("express")
const cors = require("cors")
const dbConnect = require('./config/mongo')
const app = express()

app.use(cors())

const port = process.env.PORT || 3000


// aqui invocamos a las rutas !!
//TODO localhost/api/____
app.use("/api",require("./routes"))

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})

dbConnect()