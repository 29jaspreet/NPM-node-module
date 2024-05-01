const { response } = require('express');
const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

async function dbConnect()
{
  let result = await client.connect();
  let database = result.db('e-com');
return database.collection('product');
}

module.exports =dbConnect;