const express = require("express");
const port = 3000;
const app = express();

app.get('/', (req, res) => res.json([
    {
        name:'spencer',
        email:'spl@mystic.com'
    },
    {
        name:'edith',
        email:'edith@mystic.com'
    },
    {
        name:'sarah',
        email:'sarah@mystic.com'
    }
    ,
    {
        name:'sarah',
        email:'sarah@mystic.com'
    },
    {
        name:'regulus',
        email:'regulus@mystic.com'
    }
]))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


// to build it to a docker image 
// docker build -t user-service-api:latest .