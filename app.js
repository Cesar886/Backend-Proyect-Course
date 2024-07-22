const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())

const port = 300

app.listen(port, () => {
    console.log(`tu app esta lista por http://localhost:${port}`);
})