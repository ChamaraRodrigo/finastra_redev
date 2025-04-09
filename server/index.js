const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Create MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',        
  password: '12345678',     
  database: 'registration_db'
});

db.connect((err) => {
  if (err) {
    console.error('MySQL connection failed:', err);
    process.exit(1);
  }
  console.log('Connected to MySQL');
});


app.post('/submit', (req, res) => {
  const {
    firstName, lastName, jobTitle,
    company, mobile, email, website,
    privacyPolicy
  } = req.body;

  const sql = `
    INSERT INTO registrations
    (firstName, lastName, jobTitle, company, mobile, email, website, privacyPolicy)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(sql, [
    firstName, lastName, jobTitle,
    company, mobile, email, website,
    privacyPolicy
  ], (err, result) => {
    if (err) {
      console.error('Insert error:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.status(200).json({ message: 'Registration saved' });
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${5000}`);
});
