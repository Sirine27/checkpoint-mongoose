const mongoose = require('mongoose');

const connectDB = async()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017/Person', {useNewUrlParser: true, useUnifiedTopology: true});
    }
    catch (error){
        handeleError(error)

    }
}
module.exports=connectDB