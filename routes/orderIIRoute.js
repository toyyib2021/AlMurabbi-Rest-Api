const express = require('express')
const {
    getOrderII,
    orderIIWithId,
    orderIIByName,
    orderIIListByName,
    addOrderII,
    updateOrderII
  } = require('../controllers/orderIIController')


const route = express.Router();

route.get('/getOrderII', getOrderII)
    
route.get('/orderWithId/:id', orderIIWithId)
  
route.get('/orderIIByName/:schoolName', orderIIByName)

route.get('/orderIIListByName/:schoolName', orderIIListByName)  
  
route.post('/addOrderII', addOrderII)
  
route.put('/updateOrderII/:id', updateOrderII)
  
// route.delete('/deleteCustomer/:id', deleteCustomer)

module.exports = route;
  
  