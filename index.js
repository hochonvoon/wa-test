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

// WhatsApp webhook (GET for verification)
app.get("/webhook", (req, res) => {
  const verify_token = "punching-test-token"; // 你自己取的字符串

  const mode = req.query["hub.mode"];
  const token = req.query["hub.verify_token"];
  const challenge = req.query["hub.challenge"];

  if (mode && token === verify_token) {
    return res.status(200).send(challenge);
  } else {
    return res.sendStatus(403);
  }
});

// Webhook receiving messages (POST)
app.post("/webhook", (req, res) => {
  console.log("Received message:", JSON.stringify(req.body, null, 2));
  res.sendStatus(200);
});



const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server running on port", port);
});

