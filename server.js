var nodemailer = require('nodemailer');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');


// var morgan = require('morgan');
// app.use(morgan('combined'));

app.use(function(req, res, next) {
  console.log(req.method, req.url);
  next();
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static('./public'));


// app.use('/', function(req, res) {
// res.sendFile(path.join(__dirname + '/public/index.html'))
// });

// app.use(bodyParser.json());
app.use(bodyParser.urlencoded());



app.post('/data', function(req, res) {
  console.log(req.body.info);
  var data = req.body.info;


  var transporter = nodemailer.createTransport('SMTP', {
    service: 'gmail',
    auth: {
      user: 'yonas.berhe007@gmail.com',
      pass: 'EqA9q83*i'
    }
  });

  // setup e-mail data with unicode symbols
  var mailOptions = {
    from: 'yonas.berhe007@gmail.com', // sender address
    to: 'robel.ghebrekiros@gmail.com', // list of receivers
    subject: 'Hello', // Subject line
    text: 'Hello world ', // plaintext body
    html: data.firstName + " " + data.lastName
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: ' + info.response);
  });
  // res.sendStatus(200);
})

app.listen(4812, function() {
  console.log("server has started on port 4812");

});
