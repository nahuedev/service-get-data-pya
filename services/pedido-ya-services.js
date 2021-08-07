
require('dotenv').config();
const axios = require('axios');
const config = require('../config').config;

const urlRequest = config.apiPedidoYa.url;
const headers = config.apiPedidoYa.headers;


const getDataPedidoYa = async () => {
    try {
        const response = await axios.get(urlRequest, {
            headers
        })

        return response;

    } catch (error) {
        throw error;

    }
}

module.exports = {
    getDataPedidoYa
};
