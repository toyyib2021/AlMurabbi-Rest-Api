const express = require('express')
const {
    allPaymentHistory,
    payHistroyById,
    payHistoryByOderId,
    addPayment,
    updatePaymentById
  } = require('../controllers/paymentHistoryController')

const route = express.Router();

route.get('/allPaymentHistory', allPaymentHistory)
    
route.get('/payHistroyById/:id', payHistroyById)
  
route.get('/payHistoryByOderId/:orderId', payHistoryByOderId)
  
route.post('/addPayment', addPayment)
  
route.put('/updatePaymentById/:id', updatePaymentById)
  
module.exports = route;
  
  