// content of index.js
const contract = require('./invoke.js')
const express = require("express");
const bodyParser = require("body-parser");
const fileUpload = require('express-fileupload');
const cors = require('cors');
const morgan = require('morgan');

const port = 3546

 //async function main() {
 //  contract.create("0008", "00008")
 //}
main();


async function main() {

app = express();

app.use(express.json())
app.use(fileUpload({
    createParentPath: true
}));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'))
app.use(express.static('views/static'));
app.use('/', express.static("views/static"))
app.set('view engine', 'ejs');

app.get("/create", async (req) => {
   
   await contract.create(req.query.chave, req.query.valor);
   console.log("success post");
})
app.get("/calcule", async (req, res) => {
   await contract.calcule(req.query.chave, req.query.valor1, req.query.valor2, req.query.operation);
   console.log("success post");
   res.redirect("/");
})

app.get("/update", async (req, res) => {
   ret = await contract.update(req.query.chave, req.query.valor);
   console.log(ret);
   res.send(ret);
})

app.get("/retrieve", async (req, res) => { 
   ret = await contract.retrieve(req.query.chave);     
   console.log(ret);   
   res.send(ret);
})

app.get("/getHistoryByKey", async (req, res) => { 
   ret = await contract.getHistoryByKey(req.query.chave);     
   console.log(ret);   
   res.send(ret.replaceAll("#","<br>"));
})

app.get("/delete", async (req, res) => {     
   
   ret = await contract.delete(req.query.chave);
   console.log(ret);
   res.send(ret);
})

app.listen(port, function(err) {
   console.log("Servidor rodando na porta" + port);
})

}
