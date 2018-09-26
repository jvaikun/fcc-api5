'use strict';

var express = require('express');
var cors = require('cors');
var multer = require('multer');

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

var upload = multer();

//Post upload file, return JSON object {filename, size}
app.post('/api/fileanalyse', upload.single('upfile'), function(req,res){
  res.json({filename:req.file.originalname, size:req.file.size});  
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});