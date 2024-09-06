const express = require("express");
const fs = require("fs");
const router = express.Router();

const PATH_ROUTES = __dirname;

const removeExtension = (fileName) => {
  return fileName.split('.').shift();
};

fs.readdirSync(PATH_ROUTES).filter((file) => {
  const name = removeExtension(file);
  if (name !== 'index') {
    const route = require(`./${file}`);
    if (route.router) {
      router.use(`/${name}`, route.router);
    } else {
      router.use(`/${name}`, route); // Asume que el archivo exporta directamente un router.
    }
  }
});

module.exports = router;