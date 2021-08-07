const express = require('express');
const router = express.Router();
const controller = require('../controllers/pedido-ya-controller');

module.exports = () => {
  router.get('/get-data', controller.getAllData);

  return router;
};
