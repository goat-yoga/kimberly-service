const express = require('express');
const bodyparser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const router = require('./router.js');
const mongoose = require('mongoose')

const service = express();
const port = 3005;

service.use(bodyparser.json());
service.use(bodyparser.urlencoded({extended:true}));
service.use(morgan('dev'));
service.use(cors());

service.use('/products', router);

service.use('/', express.static(path.join(__dirname, '../public')))

service.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))