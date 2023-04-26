const {MongoClient} = require('mongodb');
const dotenv = require('dotenv');
dotenv.config();

var client = new MongoClient(process.env.MONGODB_URI);

exports.fetchAllBooks = async(filterCategory)=>{
    try{
        await client.connect();
        let output;
        if (filterCategory === "All"){
            output = await client.db('sample_ecommerce').collection('appdata').find().toArray();
        }else if (filterCategory === "Others"){
            output = await client.db('sample_ecommerce').collection('appdata').find({category:{$nin:["Fiction","Story","Detective"]}}).toArray();
        }else{
            output = await client.db('sample_ecommerce').collection('appdata').find({category:filterCategory}).toArray();
        }
         
        return output;
    }catch(error){
        console.log("Error: ",error);
    }
}
exports.fetchSearchResult = async(query)=>{
    try{
        await client.connect();
        let output = await client.db('sample_ecommerce').collection('appdata').find({$or:[{"category":{$regex:query,$options:"i"}},{"title":{$regex:query,$options:"i"}}]}).toArray();
        return output;
    }catch(error){
        console.log("Error: ",error);
    }
}