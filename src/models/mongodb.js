
require('dotenv').config()

var MongoClient = require('mongodb').MongoClient;
var mongo = new MongoClient(process.env.MGDBURL,{monitorCommands: true })

function getData(collection,table){
mongo.connect()
.then((db)=>{
  console.log('success connect to the mongodb')
  var dbo = db.db(collection)
  // get data from a collection
  dbo.collection(table).find().toArray()
  .then(data=>{
  return data;
  })
  .catch(err=>{
    console.log(err)
  })
})
.catch((err)=>{
  console.log(err)
})
}


function postData(collection,table,obj){
  mongo.connect()
  .then((db)=>{
    console.log('success connect to the mongodb')
    var dbo = db.db(collection)
    // insert data into a collection
   dbo.collection(table).insertOne(obj)
    .then(()=>{
      console.log('success insert data')
    })
    .catch(err=>{
      console.log(err)
    })
  })
  .catch((err)=>{
    console.log(err)
  })
  }



    //create collection
  // dbo.createCollection('animal')
  // .then(()=>{
  //     console.log('tao bang thang cong')
  // })
  // .catch(()=>{
  //     console.log('tao bang that bai')
  // })

module.exports = getData;
module.exports = postData;
