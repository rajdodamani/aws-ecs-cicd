const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('CI/CD Pipeline - AWS ECS deployment - Version 2 deployed successfully!');
});

app.get('/health', (req, res) => {
  res.json({ ok: true });
});

module.exports = app;