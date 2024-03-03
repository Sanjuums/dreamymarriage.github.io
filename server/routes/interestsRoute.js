const express = require("express");
const router = express.Router();
const InterestModel = require('../models/interestModel')
const nodemailer = require("nodemailer");

router.get('/', async (req, res) => {
  try{
    const allInterests = await InterestModel.find();
    res.status(201).json(allInterests)
  }catch(err){
    res.status(400).json({message: err.message})
  }

});

router.post('/', async (req, res) => {
    const interest = new InterestModel({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        msg: req.body.msg
    })

    try {
        const newInterest = await interest.save()
        res.status(201).json(newInterest)
        sendMail()
        
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

function sendMail(){
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'anand.sk1324@gmail.com',
      pass: 'gpdi rvhc ekwe dacz'
    }
  });
  
  var mailOptions = {
    from: 'anand.sk1324@gmail.com',
    to: 'anand.sk1324@gmail.com',
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
}
module.exports = router