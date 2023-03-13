const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "mit",
    port: "3306"
})

app.get('/', (req, res) => {
    db.query("SELECT DATE_FORMAT(date, '%m-%d-%Y') AS Date, COUNT(mask) AS Amount, mask FROM `people` GROUP BY date, mask ORDER BY date, mask;", 
    (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    });
});

app.get('/mask', (req, res) => {
    db.query("SELECT DATE_FORMAT(date, '%m-%d-%Y') AS Date, COUNT(mask) AS Amount, mask FROM `people` WHERE mask = 'ใส่' AND DATE_FORMAT(date, '%m-%d-%Y') BETWEEN DATE_FORMAT(DATE_ADD(current_Date()-7, INTERVAL 10 HOUR) GROUP BY date, mask ORDER BY date, mask;", 
    (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    });
});

app.get('/maskat', (req, res) => {
    const a = req.query.dateQuery;
    const b = req.query.dateQuery2;
    db.query("SELECT DATE_FORMAT(date, '%m-%d-%Y') AS Date, COUNT(mask) AS Amount, mask FROM `people` WHERE mask = 'ใส่' AND DATE_FORMAT(date, '%m-%d-%Y') BETWEEN ? AND ? GROUP BY date, mask ORDER BY date, mask;", 
    [a, b], (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    });
});

app.get('/nomask', (req, res) => {
    db.query("SELECT DATE_FORMAT(date, '%m-%d-%Y') AS Date, COUNT(mask) AS Amount, mask FROM `people` WHERE mask = 'ไม่ใส่' AND DATE_FORMAT(date, '%m-%d-%Y') BETWEEN DATE_FORMAT(DATE_ADD(current_Date()-7, INTERVAL 10 HOUR) GROUP BY date, mask ORDER BY date, mask;", 
    (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    });
});

app.get('/nomaskat', (req, res) => {
    const a = req.query.dateQuery;
    const b = req.query.dateQuery2;
    db.query("SELECT DATE_FORMAT(date, '%m-%d-%Y') AS Date, COUNT(mask) AS Amount, mask FROM `people` WHERE mask = 'ไม่ใส่' AND DATE_FORMAT(date, '%m-%d-%Y') BETWEEN ? AND ? GROUP BY date, mask ORDER BY date, mask;", 
    [a, b], (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    });
});

app.get('/time', (req, res) => {
    db.query("SELECT DISTINCT DATE_FORMAT(date, '%m-%d-%Y') AS Date FROM `people` WHERE DATE_FORMAT(date, '%m-%d-%Y') BETWEEN DATE_FORMAT(DATE_ADD(current_Date()-7, INTERVAL 10 HOUR), '%m-%d-%Y') AND DATE_FORMAT(DATE_ADD(current_Date()-1, INTERVAL 10 HOUR), '%m-%d-%Y') GROUP BY date, mask ORDER BY date, mask;", 
    (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    });
});

app.get('/timeat', (req, res) => {
    const a = req.query.dateQuery;
    const b = req.query.dateQuery2;
    db.query("SELECT DISTINCT DATE_FORMAT(date, '%m-%d-%Y') AS Date FROM `people` WHERE DATE_FORMAT(date, '%m-%d-%Y') BETWEEN ? AND ? GROUP BY date, mask ORDER BY date, mask;", 
    [a, b], (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    });
});

app.listen('3001', () => {
    console.log("Server is running on port 3001");
})