const mongoose = require('mongoose');

mongoose.connect(process.env.connectionString)
.then(()=>console.log('Connection Successfull'))
.catch((err)=>console.log(err));