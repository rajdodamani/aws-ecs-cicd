const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('CI/CD Pipeline - for deploying app to AWS ECS');
});

module.exports = app;