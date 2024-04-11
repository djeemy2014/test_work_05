import express from 'express'
import path from 'path';
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const optionsPath={ root: __dirname }

const app=express()
const port = 8080
const host = '127.0.0.1'

app.get('/',function(req,res) {
    res.sendFile('./index.html',optionsPath);
    console.log('/', req.ip,  new Date())
    //console.log(req)
  });
app.get('/2',function(req,res) {
    res.sendFile('./index2.html',optionsPath);
    console.log('/', req.ip,  new Date())
    //console.log(req)
  });

app.listen(port, () => {
    console.log(`listening on host ${host} port ${port}`)
    console.log(`http://${host}:${port}/`)
  
  })

