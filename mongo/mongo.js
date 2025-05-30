const mongoose = require('mongoose')

const mongoUrl = 'mongodb+srv://jamax382:DTHAdOrm0jYpnsWi@fullstackproject.4xxwf.mongodb.net/BlogBased?retryWrites=true&w=majority&appName=FullstackProject'
mongoose.connect(mongoUrl).then(()=>{console.log("mongo connected correctly")})