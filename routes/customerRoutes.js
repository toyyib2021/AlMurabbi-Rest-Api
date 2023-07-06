const express = require('express')
const {allCustomer, customer, customerByName,listcustomerByName, 
    addCustomer, updateCustomer, deleteCustomer} = require('../controllers/customersController')

const route = express.Router();

route.get('/allCustomer', allCustomer)
    
route.get('/customer/:id', customer)
  
route.get('/customerByName/:schoolName', customerByName)

route.get('/listcustomerByName/:schoolName', listcustomerByName)  
  
route.post('/aadCustomer', addCustomer)
  
route.put('/updateCustomer/:schoolName', updateCustomer)
  
route.delete('/deleteCustomer/:id', deleteCustomer)

module.exports = route;
  
  