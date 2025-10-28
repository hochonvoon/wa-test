const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World 👋');
});

// Render 需要使用这个 PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Running on ${PORT}`));
