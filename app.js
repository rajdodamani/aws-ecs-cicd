const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('CI/CD Pipeline - AWS ECS deployment - Images are tagged with git commit hash - Task definition is updated with new image URI');
});

app.get('/health', (req, res) => {
  res.json({ ok: true });
});

module.exports = app;