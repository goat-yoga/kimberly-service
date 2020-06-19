const express = require('express');
const bodyparser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
// TODO: add router js
const mongoose = require('mongoose')

const service = express();
const port = 3005;

service.use(bodyparser.json());
service.use(bodyparser.urlencoded({extended:true}));
service.use(morgan('dev'));
service.use(cors());

app.use('/', express.static(path.join(__dirname, 'public')))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))