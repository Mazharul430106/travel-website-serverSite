const express = require('express')
const app = express()
const cors = require('cors')
const port = 5000

app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Travel Website is Running')
})

app.listen(port, () => {
  console.log(`Travel website is listening on port ${port}`)
})