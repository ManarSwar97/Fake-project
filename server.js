const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('helooooo from the other side')
})
const PORT = 4000

app.listen(PORT, () => {
  console.log(`app listening at ${PORT}`)
})
