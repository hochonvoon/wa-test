const express = require("express");
const app = express();

app.use(express.json());

// 首页 GET
app.get("/", (req, res) => {
  res.send("Hello World 👋");
});

// 测试 POST
app.post("/", (req, res) => {
  res.json({
    message: "POST 收到 ✅",
    body: req.body
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server running on port", port);
});
