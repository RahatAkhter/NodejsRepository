
const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
if(err){
   return  console.log('unable to connect ');
}
 console.log('Connect Success');

db.collection('Users').find({name:'Sajid'}).toArray().then((docs)=>{
console.log('Users');
console.log(JSON.stringify(docs,undefined,2));
},(err)=>{
    console.log('unable to fetch');
});

//db.close();

});
