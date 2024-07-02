var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'debadanmohanty727@gmail.com',
    pass: 'aqaz nccm kqpe uuut'
  }
});

var mailOptions = {
  from: 'debadanmohanty727@gmail.com',
  to: 'debadanmohanty7735199207@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
