// reading data from database

// const {MongoClient} = require('mongodb');
// const url = 'mongodb://localhost:27017';
// const client = new MongoClient(url);

// async function getData()
// {
//   let result = await client.connect();
//   let database = result.db('e-com');
//   let collection =database.collection('product');
//   let response =await collection.find({}).toArray();
//   console.log(response);
// }
// getData();


// Reading data using promises............


// console.log(dbConnect());

// This way is used by using promises
// dbConnect().then((response)=>{
//   response.find().toArray().then((data)=>{
//    console.warn(data)
//   });
// })


// by using async and await we can also handle the promises

const dbConnect=require('./Mongodb');

const main = async()=>{
  let data = await dbConnect();
  data = await data.find().toArray();
  console.log(data);
}
main();