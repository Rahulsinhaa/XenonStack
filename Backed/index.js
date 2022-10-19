const connetToMongo=require('./db');

const express= require('express');
const app=express();
const port=5000;
var cors = require('cors')


app.use(cors())
connetToMongo();
app.use(express.json())
app.use('/cpi/adminauth',require('./routes/adminauth'));
app.use('/cpi/Contactus',require('./routes/Contactus'));

app.listen(port,()=>{
    console.log(`we are listning at ${port}`);
})
