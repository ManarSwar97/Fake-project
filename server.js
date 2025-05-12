const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hiiiiiiiiiiiiiiiiii')
})
const PORT = 4000

app.listen(PORT, () => {
  console.log(`app listening at ${PORT}`)
})
