//const MongoClient=require('mongodb').MongoClient;
//here we destructuring Object value assign into variable
// var user ={name:'Usman',age:25};
// var {name}=user;
// console.log(name);
//end of destructuring

const {MongoClient,ObjectID}=require('mongodb');
// here we create unique Object ID
// var obj=new ObjectID();
// console.log(obj);
//end on=bject id
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
if(err){
   return  console.log('unable to connect ');
}
 console.log('Connect Success');

// db.collection('Todos').insertOne({

// },(err,result)=>{
// if(err){
//    return console.log('unable to insert',err);
// }
// console.log(JSON.stringify(result.ops,undefined,2));
// });

// db.collection('Users').insertOne({

//     name:'Sajid',
// age:23,
// location :'Karachi'

// },(err,result)=>{

//     if(err){
//         return console.log('unable to Insert');
//     }
//     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2));
// });



db.close();

});
