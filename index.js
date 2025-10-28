const express = require('express');
const app = express();

app.use(express.json()); // 允许解析 JSON Body

// GET 测试
app.get('/', (req, res) => {
  res.send('Hello World 👋');
});

// POST 测试
app.post('/webhook', (req, res) => {
  console.log('Received:', req.body);

  res.json({
    reply: `你说了：“${req.body.message}”`,
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Running on ${PORT}`));
