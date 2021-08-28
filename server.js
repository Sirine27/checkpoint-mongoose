const express = require("express");
const connectDB = require ("./DB/connectDB")
const PersonDB = require("./Model/model")

const app = express();

const PORT =3000;

// new person 

//const Person = new PersonDB( { name:"Ciline", age:32, favoriteFood:"Pizza"})
//Person.save ((err)=>{
  //if (err) return handleError(err)
    //save
  //})

//Find All
//const search = async()=>{
  // try{
//const data = await PersonDB.find({});
//console.log(data)
  //  }
    //catch(err){
    //console.log(err)
    //}
 //}
//search()

//Find one
//const search = async()=>{
  //try{
//const data = await PersonDB.findOne({name:"wissem"});
//console.log(data)
    //}catch(err){
    //console.log(err)
  // }
//}
//search()
//Find by id
//const search = async()=>{
// try{
//const data = await PersonDB.findById({_id:"612a4e47e096bf4ac52dd621"});
//console.log(data)
   // }catch(err){
       // console.log(err)
  // }
//}
//search()


//Find One Person which has a certain food in the person's favorites
 //const search = async() => {
  //try {
   //const data = await PersonDB.findOne({favoriteFood: "Sandwich"})
    //console.log(data)
    //} catch (err) {
   //console.error(err)
  //}
//}
 //search()

//const UpdatefavoriteFood= async()=>
//{
  //try{
  // const update= await PersonDB.findOneAndUpdate({_id:"612a4e47e096bf4ac52dd621"} ,{$set:{'favoriteFood':"hamburger"}});
       
//console.log("update")
        //} catch (err){
       //console.log(err) 
      //}
    //}
   //   UpdatefavoriteFood()

//const addAge = async()=>{
  //try{
    // const person= await PersonDB.findOneAndUpdate({_id:"612a4e035ec08a0a4f1c348f"} ,{$set:{'age':20}},{new:true, useFindAndModify: false});
         
  //console.log(person)
       // } catch (err){
        //console.log(err) 
        //}
 // }
     // addAge()


//Fin one delet
//const Delete = async()=>{
  // await PersonDB.findOneAndDelete({_id:"612a4ea213d5e99f0553aeb3"}, (err,data)=>{
    //   try{
//console.log("removed Data",data)
     // }catch(error){
          // console.log(err)
        //}
    //})
//}

//Delete()


//Delete Many Documents with model.remove()

//const DeletePerson = async() => {
     //const res = await PersonDB.remove({name: "Ciline"}, (err, data) => {
         //try {
          //console.log("Persons removed ")
        //} catch (err) {
         // console.error(err) 
       // }
     //})
   //}

//DeletePerson()

  //Find people who like Soupe


//const chainSearch = async() => {
  //  try {
    //  const data = await PersonDB.find({favoriteFoods: {$elemMatch: {$eq: "Soupe"}}}).sort({name: 'wissem'}).limit(2).select({age: 0, __v: 0}).exec()
      //    console.log(data)
    //} catch (err) {
      //  console.error(err)
    //}
//}
//chainSearch()


connectDB()

app.listen(PORT,(err)=>{
  err?
  console.log(err)
  : console.log(`server is ruuning in ${PORT}...`)
}
)