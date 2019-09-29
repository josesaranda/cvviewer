const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 8123;
const HOST = 'localhost';
const api = require('./routes/api');
const db = require('./db/db');

db.serialize(function() {
    db.run("CREATE TABLE IF NOT EXISTS cv (id INTEGER PRIMARY KEY AUTOINCREMENT, fileName TEXT, createdAt TEXT, updatedAt TEXT)");
    db.run("INSERT INTO cv (fileName, createdAt, updatedAt) VALUES (?,?,?)", ['http://localhost:8123/cvs/example.pdf',new Date().getTime(), new Date().getTime()]);
});

app.use(express.static(path.resolve(__dirname,'../../app/build')));
app.use("/cvs", express.static(path.resolve(__dirname,'./db/cvs')));

// app.get('/home', (req,res,next) => {
//     db.all("SELECT * FROM cv", function(err, row){
//         console.log(row);
//     });
//     res.render('home', {});
// });

// app.get('/cv', (req, res, next) => {
//     res.render('cv',{pdf : 'example.pdf'});
//     // var pathFile = path.dirname(require.main.filename) + '/pdfs/text.txt';
//     // fs.readFile(pathFile,(err, data) => {
//     //     res.send('Hello world: ' + data);
//     // });
// });

app.use('/api', api);

app.get('/', (req, res, next) => {
    res.sendFile(path.resolve(__dirname,'../../app/build/index.html'));
});

app.get('*', (req, res) => {
    res.redirect('/');
});

app.listen(PORT, HOST, () => {
    console.log(`Listen on http://${HOST}:${PORT}`);
});
