const PaymentHistory = require('../model/paymentHistroyModel')


const allPaymentHistory = async(req, res) => { 
    try {
        const paymentHistory = await PaymentHistory.find({});
        res.status(200).json(paymentHistory);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
  }

const payHistroyById = async(req, res) =>{
    try {
        const {id} = req.params;
        const payId = await PaymentHistory.findById(id);
         // we cannot find any order in database
         if(!payId){
          return res.status(404).json({message: `cannot find any payment with ID ${id}`})
          }
          res.status(200).json(payId);
    } catch (error) {
          res.status(500).json({message: error.message})
    }
}

  const payHistoryByOderId = async(req, res) =>{
    try {
        const {orderId} = req.params;
        const payOrderId = await PaymentHistory.find({orderId: orderId})
         // we cannot find any order in database
         if(!payOrderId){
          return res.status(404).json({message: `cannot find any customer with ID ${orderId}`})
      }
        res.status(200).json(payOrderId);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
  } 

  const addPayment = async(req, res) => {
    try {
        const addPayment = await PaymentHistory.create(req.body)
        res.status(200).json(addPayment);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }}

  const updatePaymentById = async(req, res) => {
      try {
          const {id} = req.params;
          const edittedPayment = await PaymentHistory.findByIdAndUpdate(id, req.body);
          // we cannot find any Payment in database
          if(!edittedPayment){
              return res.status(404).json({message: `cannot find any payment with ID ${id}`})
          }
          const edittedPaymentI = await PaymentHistory.findById(id);
          res.status(200).json(edittedPaymentI);
          
      } catch (error) {
          res.status(500).json({message: error.message})
      }
    }


  module.exports = {
    allPaymentHistory,
    payHistroyById,
    payHistoryByOderId,
    addPayment,
    updatePaymentById
  }