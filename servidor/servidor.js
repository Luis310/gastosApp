const express = require('express')
const app = express();
const ruta= require('path');

const rutaPublica= ruta.join(__dirname,'..','build');

const puerto= process.env.PORT || 3000;


app.use(express.static(rutaPublica));

app.get('*',(req,res)=>{
    res.sendFile(ruta.join(rutaPublica,'index.html'));
});

app.listen(puerto,()=>{
    console.log('Servidor listo y escuchando en puerto 3000');
});