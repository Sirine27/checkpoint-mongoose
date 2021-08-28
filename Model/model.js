const mongoose=require('mongoose');
const  Schema =mongoose.Schema;


const PersonSchema= new Schema({
    name : {type : String, required : true},
    age : Number,
    favoriteFood : String
});
const PersonDB = mongoose.model("Person", PersonSchema);

module.exports=PersonDB