const errorMiddleware = (err, req, res, next) => {
    console.log('connected to MongoDB')
    console.log('here is an error middleware');
    res.json({message: err.message, stack: process.env.NODE_ENV});
}


