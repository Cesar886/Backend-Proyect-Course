const mongoose = require("mongoose");

const dbConnectNoSql = () => {
    const DB_URI = process.env.DB_URI;
    mongoose.connect(
        DB_URI, 
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }).then(
        (res) => { console.log(" *** Conexion Exitosa ***  "); },
        err => { console.log(" *** Error en la Conexion *** ", err); }
      );;
}

module.exports = dbConnectNoSql;
