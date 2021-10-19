const mongoose = require('mongoose')
require('dotenv').config()
mongoose.connect(process.env.URI,function (err){
    if(err) throw(err)
    console.log('db connected')
});

