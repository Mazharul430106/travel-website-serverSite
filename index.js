const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config()


app.use(cors())
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.qm6ghoc.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

const run = async () => {
    try {
        const packagesData = client.db("travelWebsite").collection("packageCollections");
        const islandsData = client.db("travelWebsite").collection("islandsCollections");
        const totalClients = client.db("travelWebsite").collection("clientsCollections");

        // get packages data from database.
        app.get('/packages', async (req, res) => {
            const query = {};
            const result = await packagesData.find(query).toArray();
            res.send(result);
        })

        // get islands data from database.
        app.get('/allIslands', async (req, res) => {
            const query = {};
            const result = await islandsData.find(query).toArray();
            res.send(result);
        })

        // get clients data from database.
        app.get('/allclients', async (req, res) => {
            const query = {};
            const result = await totalClients.find(query).toArray();
            res.send(result)
        })

    }
    catch {

    }
    finally {

    }
}

run().then(error => console.log(error))



app.get('/', (req, res) => {
    res.send('Travel Website is Running')
})

app.listen(port, () => {
    console.log(`Travel website is listening on port ${port}`)
})