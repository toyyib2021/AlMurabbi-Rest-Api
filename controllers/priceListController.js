const PriceList = require('../model/priceListModel')


const allPriceList = async(req, res) => { 
    try {
        const allPriceList = await PriceList.find({});
        res.status(200).json(allPriceList);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
  }

  const priceByBookName = async(req, res) =>{
    try {
        const {bookName} = req.params;
        const priceBookName = await PriceList.findOne({bookName: bookName})
         // we cannot find any price in database
         if(!priceBookName){
          return res.status(404).json({message: `cannot find any customer with ID ${bookName}`})
      }
        res.status(200).json(priceBookName);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
  } 

  const addBookPrice = async(req, res) => {
    try {
        const bookPrice = await PriceList.create(req.body)
        res.status(200).json(bookPrice);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }}

  const updateBookPrice = async(req, res) => {
      try {
          const {bookName} = req.params;
          const bookPriceUpdated = await PriceList.findOneAndUpdate({bookName: bookName}, req.body);
          // we cannot find any price in database
          if(!bookPriceUpdated){
              return res.status(404).json({message: `cannot find any customer with ID ${bookName}`})
          }
          const bookPriceUpdatedI= await PriceList.findOne({bookName: bookName}, req.body);
          res.status(200).json(bookPriceUpdatedI);
          
      } catch (error) {
          res.status(500).json({message: error.message})
      }
    }

  const deleteBook = async(req, res) =>{
    try {
          const {bookName} = req.params;
          const deletedBook = await PriceList.findOneAndDelete({bookName});
          if(!deletedBook){
              return res.status(404).json({message: `cannot find any customer with ID ${bookName}`})
          }
          res.status(200).json(deletedBook);
          
        } catch (error) {
          res.status(500).json({message: error.message})
        }
  }


  module.exports = {
    allPriceList,
    priceByBookName,
    addBookPrice,
    updateBookPrice,
    deleteBook,
  }