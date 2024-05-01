const dbConnect=require('./Mongodb');

const Deletedata = async ()=>{
    const database = await dbConnect();
    let result=await database.deleteMany(
        {
            name:"note 8"
        }
    
    )
    console.log(result)
}
Deletedata();