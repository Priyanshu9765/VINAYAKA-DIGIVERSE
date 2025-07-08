const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/send', (req, res) => {
  const { firstName, lastName, email, mobile, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'priyanshuborekar75@gmail.com',
      pass: 'utln smxy zuzn ljcw'
    }
  });

  const mailOptions = {
    from: email,
    to: 'priyanshuborekar75@gmail.com',
    subject: 'New Contact Form Submission',
    text: `
      Name: ${firstName} ${lastName}
      Email: ${email}
      Mobile: ${mobile}
      Message: ${message}
    `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Error');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('Success');
    }
  });
});

// ✅ Only ONE listen
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
