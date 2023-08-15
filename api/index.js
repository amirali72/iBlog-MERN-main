const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const User = require('./models/User');
const connectDB = require('./config/db')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const salt = bcrypt.genSaltSync(10);

const app = express();

app.use(cors({credentials:true,origin:'http://localhost:3000'}));
app.use(express.json());
app.use(cookieParser());

dotenv.config();
connectDB();

const PORT = process.env.PORT;

app.post('/register', async(req,res)=>{

    const {username, password} = req.body;
    try {
        const userDoc = await User.create({
            username, 
            password:bcrypt.hashSync(password,salt),});
        res.json(userDoc);
    } catch (error) {
        res.status(400).json(error);
    }
});

app.post('/login', async (req,res)=>{
    const {username, password} = req.body;
    const userDoc = await User.findOne({username});
    let passOk;
    if (userDoc) {
        passOk = bcrypt.compareSync(password, userDoc.password);
    }
    if (passOk) {
        jwt.sign({username, id:userDoc._id}, process.env.SECRET, {}, (err,token)=>{
            if(err) throw err;
            res.cookie('token',token).json({
                id:userDoc._id,
                username,
            });
        })      
    } else {
        res.status(400).json('Wrong Credentials');
    }
});

app.get('/profile', (req,res)=>{
    const {token} = req.cookies;
    if(token){
    jwt.verify(token, process.env.SECRET, {}, (err,info)=>{
        if(err) throw err;
        res.json(info);
    });
}
});

app.post('/logout', (req,res)=>{
    res.cookie('token','').json('ok');
})

app.listen(PORT)