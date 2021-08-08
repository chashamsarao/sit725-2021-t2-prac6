let express = require("express");
let app = express();
const MongoClient = require('mongodb').MongoClient;
let projectCollection;

const uri = 'mongodb+srv://sit725-prac4:<chasham123>@sit725-2021-t2-prac4.czepu.mongodb.net/sit725-week4?retryWrites=true&w=majority';
const client = new MongoClient(uri, {useNewUrlParser : true});
var port = process.env.PORT || 3000;
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

const createCollection = (collectionName) = {
  client.connect((err,db) => {
    projectCollection = client.db().collection(collectionName);
    if (!err) {
      console.log('Mongodb Connected')
    }
    else {
    console.log("DB error", err);
    process.exit(1);
  }
  )
}
}

app.get("/test", function (request, response) {
  var user_name = request.query.user_name;
  response.end("Hello " + user_name + "!");
});

app.listen(port,()=>{
  console.log("Listening on port ", port);
  createCollection("Places")
})