const express = require('express');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const { default: mongoose } = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/user');
const productRouters = require('./routes/product')
dotenv.config()

const app = express();
mongoose.connect(process.env.DATABASE, err =>{
    if(err) {
        console.log(err);
    } else{
        console.log("Connected to the database");
    }
})
app.use(morgan('dev'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false}));

app.use("/api", productRouters);
// app.get('/', (req, res) =>{
//     res.json('Hello world clone');
// })

// app.post('/', (req, res) =>{
//     let user = new User();
//     user.name = req.body.name;
//     user.email = req.body.email;
//     user.password = req.body.password;

//     user.save((err) =>{
//         if(err) {
//             res.json(err);
//         } else {
//             res.json('successful')
//         }
//     })
// })
app.listen(3000, err => {
    if(err) {
        console.log(err);
    } else{
        console.log("Listening port",3000);
    }
})