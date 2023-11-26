const express = require('express')
const app = express()
const port = 5000;
const data = require('./data')


app.get('/', (req, res) => {
    res.json(data);
})


app.listen(port, () => {
    console.log(`App listening on port ${port} : http://localhost:${port}`)

})