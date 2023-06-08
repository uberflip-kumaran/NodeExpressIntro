import express from 'express';

const app = express();

//get request for route /
app.get('/', (req, res) => {
    res.send('Hello World')
})

//get request for route /api/users/1
//TODO

app.listen(5555, () => console.log('Listening on port 5555...'))