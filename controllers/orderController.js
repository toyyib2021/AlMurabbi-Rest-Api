const Order = require('../model/orderModel')


const allOrder = async(req, res) => { 
    try {
        const allOrder = await Order.find({});
        res.status(200).json(allOrder);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
  }

const orderById = async(req, res) =>{
    try {
        const {id} = req.params;
        const orderId = await Order.findById(id);
         // we cannot find any order in database
         if(!orderId){
          return res.status(404).json({message: `cannot find any customer with ID ${id}`})
          }
          res.status(200).json(orderId);
    } catch (error) {
          res.status(500).json({message: error.message})
    }
}

  const orderListByOderId = async(req, res) =>{
    try {
        const {orderId} = req.params;
        const order = await Order.find({orderId: orderId})
         // we cannot find any order in database
         if(!order){
          return res.status(404).json({message: `cannot find any customer with ID ${schoolName}`})
      }
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
  } 

  const orderListByName = async(req, res) =>{
    try {
        const {bookName} = req.params;
        const order = await Order.find({bookName: bookName})
        
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
  }

  const addOrder = async(req, res) => {
    try {
        const order = await Order.create(req.body)
        res.status(200).json(order);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }}

  const updateOrderById = async(req, res) => {
      try {
          const {id} = req.params;
          const edittedOrder = await Order.findByIdAndUpdate(id, req.body);
          // we cannot find any order in database
          if(!edittedOrder){
              return res.status(404).json({message: `cannot find any customer with ID ${id}`})
          }
          const edittedOrderI = await Order.findById(id);
          res.status(200).json(edittedOrderI);
          
      } catch (error) {
          res.status(500).json({message: error.message})
      }
    }

  // const deleteCustomer = async(req, res) =>{
  //   try {
  //         const {id} = req.params;
  //         const customer = await Order.findByIdAndDelete(id);
  //         if(!customer){
  //             return res.status(404).json({message: `cannot find any customer with ID ${id}`})
  //         }
  //         res.status(200).json(customer);
          
  //       } catch (error) {
  //         res.status(500).json({message: error.message})
  //       }
  // }


  module.exports = {
    allOrder,
    orderById,
    orderListByName,
    orderListByOderId,
    addOrder,
    updateOrderById
  }