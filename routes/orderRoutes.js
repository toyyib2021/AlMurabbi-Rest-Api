const express = require('express')
const {
    allOrder,
    orderById,
    orderListByName,
    orderListByOderId,
    addOrder,
    updateOrderById
  } = require('../controllers/orderController')

const route = express.Router();

route.get('/allOrder', allOrder)
    
route.get('/orderById/:id', orderById)
  
route.get('/orderListByName/:bookName', orderListByName)

route.get('/orderListByOderId/:orderId', orderListByOderId)
  
route.post('/addOrder', addOrder)
  
route.put('/updateOrderById/:id', updateOrderById)
  
module.exports = route;
  
  