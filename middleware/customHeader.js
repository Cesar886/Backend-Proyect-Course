const customHeader = () => {
    try {
        const apikey = req.headers.api_key;
        if(apikey === 'Daniel886') {
            next()
        } else {
            res.status(403)
            res.send({error: "apikey no correcto"})
        }
    } catch (error) {
        res.status(403)
        res.send({error: "algo salio mal"})
    }
}

module.exports = customHeader;