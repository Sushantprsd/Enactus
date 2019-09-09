const express = require('express');
const route = express.Router();
const path = require('path');
const rootDir = require('../util/path');


route.get('/', (req,res,next)=>{
   res.sendFile(path.join(rootDir , 'views' , 'about.html'))
})


module.exports = route;