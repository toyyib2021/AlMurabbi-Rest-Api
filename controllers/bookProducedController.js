const BookProduct = require('../model/bookProducedModel')


const allBookProduced = async(req, res) => { 
    try {
        const bookProduced = await BookProduct.find({});
        res.status(200).json(bookProduced);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
  }

  const booksWithId = async(req, res) =>{
    try {
        const {id} = req.params;
        const books = await BookProduct.findById(id);
         // we cannot find any customer in database
         if(!books){
          return res.status(404).json({message: `cannot find any customer with ID ${id}`})
          }
          res.status(200).json(books);
    } catch (error) {
          res.status(500).json({message: error.message})
    }
  }

  // const bookWithName = async(req, res) =>{
  //   try {
  //       const {bookName} = req.params;
  //       const bookbyName = await BookProduct.findOne({bookName: bookName})
  //        // we cannot find any book in database
  //        if(!bookbyName){
  //         return res.status(404).json({message: `cannot find any book with ID ${bookName}`})
  //     }
  //       res.status(200).json(bookbyName);
  //   } catch (error) {
  //       res.status(500).json({message: error.message})
  //   }
  // } 

  const BooklistByName = async(req, res) =>{
    try {
      const {bookName} = req.params;
      const bookbyName = await BookProduct.find({bookName: bookName})
       // we cannot find any book in database
       if(!bookbyName){
        return res.status(404).json({message: `cannot find any book with ID ${bookName}`})
    }
      res.status(200).json(bookbyName);
  } catch (error) {
      res.status(500).json({message: error.message})
  }
  }

  const addBooks = async(req, res) => {
    try {
        const books = await BookProduct.create(req.body)
        res.status(200).json(books);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }}

  const updateBook = async(req, res) => {
      try {
          const {id} = req.params;
          const book = await BookProduct.findByIdAndUpdate(id, req.body);
          // we cannot find any customer in database
          if(!book){
              return res.status(404).json({message: `cannot find any book with ID ${id}`})
          }
          const bookedit = await BookProduct.findById(id);
          res.status(200).json(bookedit);
          
      } catch (error) {
          res.status(500).json({message: error.message})
      }
    }

  // const deleteCustomer = async(req, res) =>{
  //   try {
  //         const {id} = req.params;
  //         const customer = await BookProduct.findByIdAndDelete(id);
  //         if(!customer){
  //             return res.status(404).json({message: `cannot find any customer with ID ${id}`})
  //         }
  //         res.status(200).json(customer);
          
  //       } catch (error) {
  //         res.status(500).json({message: error.message})
  //       }
  // }


  module.exports = {
    allBookProduced,
    booksWithId,
    BooklistByName,
    addBooks,
    updateBook
  }