const express = require('express');
const morgan = require('morgan');
const bodyparser = require('body-parser');

const app = express();

app.use(morgan('dev'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false}));

app.get('/', (req, res) =>{
    res.json('Hello world clone');
})

app.listen(3000, err => {
    if(err) {
        console.log(err);
    } else{
        console.log("Listening port",3000);
    }
})