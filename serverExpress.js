'use strict';

const fs = require('fs');
const path = require('path');
const guestsPath = path.join(__dirname, 'guests.json');

const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

app.disable('x-powered-by');

app.get('/guests', (req, res) => {
    fs.readFile(guestsPath, 'utf8', (err, guestsJSON) => {
        if (err) {
            console.error(err.stack);
            res.sendStatus(500);
        }
        let guests = JSON.parse(guestsJSON);
        res.send(guests);
    });
});

app.use((req, res) => {
    res.sendStatus(404);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});