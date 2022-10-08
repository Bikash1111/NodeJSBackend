const {MongoClient} = require('mongodb')
const dbUrl = 'mongodb://localhost:27017'
const database = 'employeedb'
const client = new MongoClient(dbUrl)

async function dbConnect(){
        let result = await client.connect();
        let db = result.db(database)
        let collection = db.collection('employee')
        return collection;
        // let response = await collection.find({}).toArray()

}

module.exports = dbConnect;