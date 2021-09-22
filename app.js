import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send('hello lanyoestate')
})

const port = process.env.PORT || 5002

app.listen(port, () => {
    console.log(`server run on port ${port}`)
})
