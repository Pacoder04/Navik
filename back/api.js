const express = require('express');
const router = express.Router();
var config = require('./config.js');
const { expressjwt: expressJwt } = require('express-jwt');
const { Pool } = require('pg');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const pool = new Pool({
  ...config.db,
  database: 'navik' 
});

const jwtMiddleware = expressJwt({
  secret: config.serverSecretKey,
  algorithms: ['HS256']
}).unless({ path: ['/api/login'] });

router.use(jwtMiddleware);



router.get('/', (req, res) => {
  res.send('api works');
});

router.get("/test", (req, res, next) => {
 res.json(["Tony","Lisa","Michael","Ginger","Food"]);
});

router.get("/users", async (req, res, next) => {
  try {
    const { rows } = await pool.query('SELECT * FROM Users');
    res.status(200).json(rows);
  } catch(err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
});


router.get("/categories", async (req, res, next) => {
  try {
    const { rows } = await pool.query('SELECT * FROM Categories');
    res.status(200).json(rows);
  } catch(err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
});


router.get("/users/:userId/habits", async (req, res, next) => {
  try {
    const { userId } = req.params;
    const { rows } = await pool.query('SELECT * FROM Habits WHERE user_id = $1', [userId]);
    res.status(200).json(rows);
  } catch(err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    console.log(`Attempting to login with username: ${username}`);

    const { rows } = await pool.query('SELECT * FROM Users WHERE username = $1', [username]);
    const user = rows[0];

    if (!user) {
      console.log('User not found');
      return res.status(401).json({ message: 'Invalid username' });
    }

    console.log('User found:', user);

   
    if (password !== user.hashed_password) {
      console.log('Password mismatch');
      return res.status(401).json({ message: 'Invalid password' });
    }

   
    const token = jwt.sign({ sub: user.user_id }, config.serverSecretKey, { expiresIn: '1h' });
    res.status(200).json({ token });
  } catch (err) {
    console.log('Error during login process:', err);
    res.status(500).json({ error: err.message });
  }
});



module.exports = router;