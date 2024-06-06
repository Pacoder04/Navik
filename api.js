const express = require('express');
const router = express.Router();
var config = require('./config.js');
const expressJwt = require('express-jwt');
const { Pool } = require('pg');
const pool = new Pool({
  ...config.db,
  database: 'navik' // specify the database name
});

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

// Get all categories
router.get("/categories", async (req, res, next) => {
  try {
    const { rows } = await pool.query('SELECT * FROM Categories');
    res.status(200).json(rows);
  } catch(err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
});

// Get all habits for a specific user
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

// Add more routes as needed...

module.exports = router;