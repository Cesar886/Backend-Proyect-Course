require("dotenv").config()
const express = require("express")
const cors = require("cors")
const dbConnect = require('./config/mongo')
const { IncomingWebhook } = require('@slack/webhook');
const morganBody = require('morgan-body')
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static("storage"))

const webHook = new IncomingWebhook(process.env.SLACK_WEBHOOK);

const loggerStream = {
    write: message => {
        webHook.send({
            text: message
        });
        console.log("🚀 ~ Capturando el LOG:", message)
    }
}
morganBody(app, {
    noColors: true,
    stream: loggerStream,
    skipt: function(req, res) {
        return res.statusCode < 400
    }
});

const port = process.env.PORT || 3000


// aqui invocamos a las rutas !!
//TODO localhost/api/____
app.use("/api",require("./routes"))

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})

dbConnect()