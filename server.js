require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const { restart } = require('nodemon')
const customerRoutes = require('./routes/customerRoutes');
const bookProducedRoutes = require('./routes/bookProducedRoutes');
const {errorMiddleware, number} = require('./middleware/errorMiddleware')
const orderII = require('./routes/orderIIRoute')
const order = require('./routes/orderRoutes')
const paymentHistory = require('./routes/paymentHistoryRoutes')
const priceList = require('./routes/priceListRoutes')


const app = express()
 
app.use(express.json())
app.use(express.urlencoded({extended: false}))

const MONGO_URL = process.env.MONGO_URL
const PORT = process.env.PORT || 3000


// Routes
app.get('/', (req, res) => {
  res.send('Hello Almurabbi')
})

app.use('/customer', customerRoutes)
app.use('/bookProduced', bookProducedRoutes)
app.use('/orderII', orderII)
app.use('/order', order)
app.use('/paymentHistory', paymentHistory)
app.use('/priceList', priceList)


// app.use(errorMiddleware);




console.log(number)
mongoose.set("strictQuery", false)
mongoose.
connect(MONGO_URL)
.then(() => {
    console.log('connected to MongoDB')
    app.listen(PORT, ()=> {
        console.log(`Node API app is running on port ${PORT}`)
    });
}).catch((error) => {
    console.log(error)
})