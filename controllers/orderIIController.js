const OrderII = require('../model/orderIIModel')



const getOrderII = async(req, res) => { 
  try {
      const orderII = await OrderII.find({});
      res.status(200).json(orderII);
  } catch (error) {
      res.status(500).json({message: error.message})
  }
}

const orderIIWithId = async(req, res) =>{
    try {
        const {id} = req.params;
        const orderII = await OrderII.findById(id);
         // we cannot find any orderII in database
         if(!orderII){
          return res.status(404).json({message: `cannot find any customer with ID ${id}`})
          }
          res.status(200).json(orderII);
    } catch (error) {
          res.status(500).json({message: error.message})
    }
}

  const orderIIByName = async(req, res) =>{
    try {
        const {schoolName} = req.params;
        const orderII = await OrderII.findOne({schoolName: schoolName})
         // we cannot find any orderII in database
         if(!orderII){
          return res.status(404).json({message: `cannot find any customer with ID ${schoolName}`})
      }
        res.status(200).json(orderII);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
  } 

  const orderIIListByName = async(req, res) =>{
    try {
        const {schoolName} = req.params;
        const orderII = await OrderII.find({schoolName: schoolName})
        
        res.status(200).json(orderII);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
  }

  const addOrderII = async(req, res) => {
    try {
        const orderII = await OrderII.create(req.body)
        res.status(200).json(orderII);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }}

  const updateOrderII = async(req, res) => {
      try {
          const {id} = req.params;
          const orderII = await OrderII.findByIdAndUpdate(id, req.body);
          // we cannot find any order in database
          if(!orderII){
              return res.status(404).json({message: `cannot find any customer with ID ${id}`})
          }
          const orderIIEdit = await OrderII.findById(id);
          res.status(200).json(orderIIEdit);
          
      } catch (error) {
          res.status(500).json({message: error.message})
      }
    }

  // const deleteCustomer = async(req, res) =>{
  //   try {
  //         const {id} = req.params;
  //         const customer = await OrderII.findByIdAndDelete(id);
  //         if(!customer){
  //             return res.status(404).json({message: `cannot find any customer with ID ${id}`})
  //         }
  //         res.status(200).json(customer);
          
  //       } catch (error) {
  //         res.status(500).json({message: error.message})
  //       }
  // }


  module.exports = {
    getOrderII,
    orderIIWithId,
    orderIIByName,
    orderIIListByName,
    addOrderII,
    updateOrderII
  }