const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 4000; 
const { MongoClient, ServerApiVersion } = require('mongodb');

app.use(cors())
app.use(express.json())

const users=[
  
]

// database connection 


const uri = "mongodb+srv://admin:admin@cluster0.eabvbcx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

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
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
      // Send a ping to confirm a successful connection
      const userCollection = client.db("simpleNode").collection('users');
      const result = await userCollection.insertOne(users);
      console.log(result)

app.get("/users", (req, res) => {
    const user = req.body
    res.send(user)
})
app.post('/users', async(req, res) =>{
    const user = req.body;
    const result = await userCollection.insertOne(user);
    user.id = result.insertedId;
    res.send(user)
    // user.id = users.length + 1;
    // users.push(user)
    // res.send(user)
    console.log(user);
})


    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally { 
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);







app.get('/', (req, res) => {
    res.send("Hello Word")

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})