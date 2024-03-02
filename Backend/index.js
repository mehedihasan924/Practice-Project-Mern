const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 4000; 


app.use(cors())
app.use(express.json())


app.get("/users", (req, res) =>{
    const users = req.body
    res.send(users)
})
 
app.post('/users', (req, res) =>{
    const user = req.body;
    console.log(user);
})

app.get('/', (req, res) => {
    res.send("Hello Word")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})