// These are starter commands
// show dbs
// use "databse name"
//db."collection name"."document name".insertOne({object})
//db."collection name"."document name".insertMany([{many objects},{many objects}])
//db."collection name".find({},{})
// If we want to add multiple documents fastly we can use the array technique for compass
//db."collection name".find().sort({}) One for assending order and -1 for dessending order
//db."collection name".find().limit()
//db."collection name".updateOne({query},{$set:{updating values}})
//db."collection name".updateOne({query},{$unset:{updating values}})
//db."collection name".updateMany({},{$set:{updating values}})
//db."collection name".updateMany({query:{$exists:true/false}},{$set:{updating values}})
//db."collection name".deleteOne({query})
//db."collection name".deleteMany({query})

// Important Command
// mongoimport "C:\Users\TF\OneDrive\Desktop\Thapa Technical MongoDB Import Files\sales.json" -d shop -c sales
// mongoimport "C:\Users\TF\OneDrive\Desktop\Thapa Technical MongoDB Import Files\sales.json" -d shop -c sales --jsonArray
// mongoexport  -d shop -c sales -o "C:\Users\TF\OneDrive\Desktop\Thapa Technical MongoDB Import Files\testing.json"
