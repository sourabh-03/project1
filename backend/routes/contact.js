const router = require('express').Router();
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service:'gmail',
  //host: 'smtp.gmail.com',
  auth: {
  user: 'ricardosmith0398',
  pass: 'pass@123P',
  }
});
 //console.log(transport.auth.user);
 router.route('/').post((req,res) =>{
  console.log('hello');
  console.log(req.body.email);
  

  var mail = {
    from: 'req.body.email', 
    to: 'ricardosmith0398@gmail.com',
    subject: req.body.contact,
    text: req.body.message
  }
  transporter.sendMail(mail, (err, data) => {
      if (err) {
        res.json({
          status: 'fail'
        })
      } else {
        res.json({
          status: 'success'
        })
      }
    })  ;
 })
 
  module.exports = router;