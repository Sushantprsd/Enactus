const express = require('express');
const path = require('path');
const app = express();

const adminRoutes = require('./routes/enactus');
app.use(express.static(path.join(__dirname, 'public')));
app.use(adminRoutes);
app.use((req,res,next)=>{
   res.status(404).sendFile(path.join(__dirname,'views','404.html'));
})
app.listen(4000,()=>{
   console.log("server running at http://localhost:4000")
})