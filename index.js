const express = require('express')
const app = express()
const port = 5000;
const data = require('./data')


app.get('/', (req, res) => {
    res.json("Welcome to SeriesSphere, your go-to destination for exploring and enjoying the rich tapestry of Indian web series.");
})

app.get('/series', (req, res) => {
    const page = req.query.page
    const limit = req.query.limit

    if ((!page) || (!limit)) {
        return res.json(data)
    }

    const startIndex = (page - 1) * limit
    const endIndex = page * limit
    const resultSeries = data.slice(startIndex, endIndex)
    res.json(resultSeries);
})


app.listen(port, () => {
    console.log(`App listening on port ${port} : http://localhost:${port}`)

})