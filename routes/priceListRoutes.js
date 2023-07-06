const express = require('express')
const {
    allPriceList,
    priceByBookName,
    addBookPrice,
    updateBookPrice,
    deleteBook,
  } = require('../controllers/priceListController')

const route = express.Router();

route.get('/allPriceList', allPriceList)
      
route.get('/priceByBookName/:bookName', priceByBookName)
  
route.post('/addBookPrice', addBookPrice)
  
route.put('/updateBookPrice/:bookName', updateBookPrice)
  
route.delete('/deleteBook/:bookName', deleteBook)

module.exports = route;
  
  