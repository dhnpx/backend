const express = require('express');
const morgan = require('morgan');

const PORT = 8000;

const app = express()
    .use(morgan('dev'))
    .use('/api', router);

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
