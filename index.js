const express = require('express')
const bodyParser = require('body-parser');
const cors= require('cors');
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config()


    const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.tivbg.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;



        const app = express()

        app.use(cors());
        app.use(bodyParser.json());

        const port = 5000;

    app.get('/', (req, res) =>{
        res.send('Hello from db it working')
    })

    const client = new MongoClient(uri, { useNewUrlParser: true,useUnifiedTopology: true  });
    client.connect(err => {
      const tasksRegistration = client.db("creativeAgency").collection("services");
       app.post('/addService',(req,res) => {
              const newService= req.body;
             ServiceRegistration.insertOne(newService)
              .then( result =>{
                  res.send(result.insertedCount > 0);
              })
              console.log(newService);
       })
     
    });
    
    
    app.listen(process.env.PORT || port)