const express = require('express');

const business = require('./api/business');

const app = express();
const PORT = process.env.PORT || 4000;

app.use('/api/business', business);

app.listen(3000, () => {
  console.log(`Server listening on port ${PORT}`);
})