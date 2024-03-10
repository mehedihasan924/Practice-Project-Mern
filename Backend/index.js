const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 4000; 
const { MongoClient, ServerApiVersion, ObjectId,  } = require('mongodb');

app.use(cors())
app.use(express.json())

// const users=[
  
// ]

// database connection 


const uri ="mongodb+srv://admin:admin@cluster0.eabvbcx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
      // await client.connect();
        const userCollection = client.db("simpleNode").collection('users');
  
      //1st Step
      // app.get('/users', async(req, res) => {
      //   const cursor = userCollection.find({});
      //   const users = await cursor.toArray();
      //   res.send(users);
      // })
      //2nd Step
      app.get('/users', async(req, res) => {
        const query = {}
        const cursor = userCollection.find(query)
        const users = await cursor.toArray();
        res.send(users)
      })
    //Update
    app.get('/users/:id', async (req, res) => {
       const id = req.params.id;
       const query = { }; //_id: ObjectId(id)
      const user = await userCollection.findOne(query);
      res.send(user);
    })
    
//Post Users
    app.post('/users', async(req, res) =>{
          const user = req.body;
          const result = await userCollection.insertOne(user);
          res.send(result);
                  
      //  without Database connection**
          // user.id = result.insertedId;
          // user.id = users.length + 1;
          // users.push(user)
          // res.send(user)
          console.log(user);
    })
      app.delete('/users/:id', async (req, res) => {
        const id = req.params.id;
        const query = {  }  //{_id: ObjectId(id)}
        const result = await userCollection.deleteOne(query);
        console.log(result);
        res.send(result);
        // console.log('trying to delete', id)
      }) 
  //Video 65-5

      await client.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally { 
    // Ensures that the client will close when you finish/error
    // await client.close( );
  }
}
run().catch(console.dir);







app.get('/', (req, res) => {
    res.send("Hello Word")

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})