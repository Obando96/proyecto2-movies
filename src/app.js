const express = require('express')
const movieRouter = require('./movies/movies.router');
const app = express()

app.use(express.json());

app.get('/', (req, res) => {
    res.json({message: "Server Ok"})
});

app.use('/', movieRouter);

app.listen(9000, () => {
    console.log("Server started at port 3000");
})

module.exports = app
