const Customer = require('../model/customerModel')


const allCustomer = async(req, res) => { 
    try {
        const allcustomer = await Customer.find({});
        res.status(200).json(allcustomer);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
  }

  const customer = async(req, res) =>{
    try {
        const {id} = req.params;
        const customer = await Customer.findById(id);
         // we cannot find any customer in database
         if(!customer){
          return res.status(404).json({message: `cannot find any customer with ID ${id}`})
          }
          res.status(200).json(customer);
    } catch (error) {
          res.status(500).json({message: error.message})
    }
  }

  const customerByName = async(req, res) =>{
    try {
        const {schoolName} = req.params;
        const customer = await Customer.findOne({schoolName: schoolName})
         // we cannot find any customer in database
         if(!customer){
          return res.status(404).json({message: `cannot find any customer with ID ${schoolName}`})
      }
        res.status(200).json(customer);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
  } 

  const listcustomerByName = async(req, res) =>{
    try {
        const {schoolName} = req.params;
        const customer = await Customer.find({schoolName: schoolName})
        
        res.status(200).json(customer);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
  }

  const addCustomer = async(req, res) => {
    try {
        const customer = await Customer.create(req.body)
        res.status(200).json(customer);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }}

  const updateCustomer = async(req, res) => {
      try {
          const {schoolName} = req.params;
          const customer = await Customer.findOneAndUpdate({schoolName: schoolName}, req.body);
          // we cannot find any customer in database
          if(!customer){
              return res.status(404).json({message: `cannot find any customer with ID ${schoolName}`})
          }
          res.status(200).json(customer);
          
      } catch (error) {
          res.status(500).json({message: error.message})
      }
    }

  const deleteCustomer = async(req, res) =>{
    try {
          const {id} = req.params;
          const customer = await Customer.findByIdAndDelete(id);
          if(!customer){
              return res.status(404).json({message: `cannot find any customer with ID ${id}`})
          }
          res.status(200).json(customer);
          
        } catch (error) {
          res.status(500).json({message: error.message})
        }
  }


  module.exports = {
    allCustomer,
    customer,
    customerByName,
    listcustomerByName,
    addCustomer,
    updateCustomer,
    deleteCustomer
  }