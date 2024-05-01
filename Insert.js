const dbConnect=require('./Mongodb');

const insert=async()=>{
    const database=await dbConnect();
    const result =await database.insertOne(
        {name:"note 5",brand:"vivo", price:"2345",category:"mobile"}
    );
    if(result.acknowledged){
    console.log("data inserted")
        
    }
}
insert();