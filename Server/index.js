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
    database: "mit"
})

app.get('/', (req, res) => {
    db.query("SELECT CAST(DateTime AS DATE) AS Date, COUNT(Status) AS Amount, Status FROM `maskdetect` GROUP BY CAST(DateTime AS DATE), Status ORDER BY DateTime, Status;", (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    });
});

app.get('/mask', (req, res) => {
    db.query("SELECT CAST(DateTime AS DATE) AS Date, COUNT(Status) AS Amount, Status FROM `maskdetect` WHERE Status = 'ใส่' GROUP BY CAST(DateTime AS DATE) ORDER BY DateTime;", (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    });
});

app.get('/nomask', (req, res) => {
    db.query("SELECT CAST(DateTime AS DATE) AS Date, COUNT(Status) AS Amount, Status FROM `maskdetect` WHERE Status = 'ไม่ใส่' GROUP BY CAST(DateTime AS DATE) ORDER BY DateTime;", (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    });
});

app.get('/wrongmask', (req, res) => {
    db.query("SELECT CAST(DateTime AS DATE) AS Date, COUNT(Status) AS Amount, Status FROM `maskdetect` WHERE Status = 'ใส่ผิด' GROUP BY CAST(DateTime AS DATE) ORDER BY DateTime;", (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    });
});

app.post('/create', (req, res) => {
    const DateTime = req.body.DateTime;
    const Status = req.body.Status;

    db.query("INSERT INTO maskdetect (DateTime, Status) VALUES(?, ?)", [DateTime, Status], (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send("Value Insert");
        }
    });
});

app.put('/update/:id', (req, res) => {
    const id = req.params.id;
    const DateTime = req.body.DateTime;
    const Status = req.body.Status;

    db.query("UPDATE maskdetect SET DateTime = ?, Status = ? WHERE Detect_ID = ?", [DateTime, Status, id], (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    });
});

app.delete('/delete/:id', (req, res) => {
    const id = req.params.id;

    db.query("DELETE FROM maskdetect WHERE Detect_ID = ?", id, (err, result) => {
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