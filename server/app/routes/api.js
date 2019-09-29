const express = require('express');
const router = express.Router();
const db = require('../db/db');

// middleware that is specific to this router
router.use(timeLog = (req, res, next) => {
  console.log('Time: ', Date.now());
  next();
});

// define the home page route
router.get('/cv',(req, res) => {
  res.send('Birds home page');
});

// define the about route
router.get('/cv/:id',(req, res) => {
  const id = req.params.id;
  // id is ok
    db.get("SELECT * FROM cv WHERE id = ?", id, (err, row) => {
      res.send(row);
    });
});

// define the about route
router.post('/cv',(req, res) => {
    res.send('About birds');
});

// define the about route
router.put('/cv/:id',(req, res) => {
    res.send('About birds');
});

// define the about route
router.delete('/cv/:id',(req, res) => {
    res.send('About birds');
});

module.exports = router;