const express = require('express');
const route = require('express').Router();
const rootDir = require('../util/path');
const path  = require('path');

const about = require('./about');
route.use('/about', about);

const contact = require('./contact');
route.use('/contact',contact);

route.get('/',(req,res,next)=>{
   res.sendFile(path.join(rootDir , 'views', 'index.html'))
})

module.exports = route;