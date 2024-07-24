const bcryptjs = require ('bcryptjs');


// Function to encrypt password

const encypt = async (passwordPlain) => {
    const hash = await bcryptjs.hash(passwordPlain, 10);
    return hash;
}

const compare = async (passwordPlain, hashPassword) => {
    return await bcryptjs.compare(passwordPlain, hashPassword);
}


module.exports = { encypt, compare };