var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost/gamedb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err; 

  console.log(db);

  var aaa = db.db('gamedb');

  aaa.collection('user').insertOne({
    username: 'Douglas',
    password: '123'
  });

  db.close();
});