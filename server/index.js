const express = require('express');
const morgan = require('morgan');
const router = require('./router');


const PORT = 8000;

const app = express()
    .use(morgan('dev'))
    .use(express.json())
    .use(router);

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

