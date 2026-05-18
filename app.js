const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('CI/CD Pipeline - AWS ECS deployment working fine!!');
});

module.exports = app;