const service = require('../services/pedido-ya-services');

getAllData= async (req,res)=>{
    const data = await service.getDataPedidoYa();
    res.json(data)
}
module.exports = {
    getAllData
};
