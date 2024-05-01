const dbConnect=require('./Mongodb');

const Updatedata = async ()=>{
    const database = await dbConnect();
    let result=await database.updateMany(
        {name:"note 5"},{$set:{
            name:"note 8"
        }
    }
    )
    console.log(result)
}
Updatedata();
