const express = require('express')
const Customer = require('../model/customerModel');
const {
    allBookProduced,
    booksWithId,
    BooklistByName,
    addBooks,
    updateBook
  } = require('../controllers/bookProducedController')

const route = express.Router();

route.get('/allBookProduced', allBookProduced)
    
route.get('/booksWithId/:id', booksWithId)
  
route.get('/BooklistByName/:bookName', BooklistByName)  
  
route.post('/addBooks', addBooks)
  
route.put('/updateBook/:id', updateBook)
  

module.exports = route;
  
  