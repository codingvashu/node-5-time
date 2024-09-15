const express = require('express')
const route = express.Router();
const usercontroller = require('../controllers/usercontroller')


route.get('/users',(req,res)=>{
    usercontroller.getAllUser(req,res)

})

module.exports = route