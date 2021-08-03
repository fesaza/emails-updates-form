const express = require("express");
const cors = require("cors");
const app = express();
const port = 4000;

app.use(cors());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.send("Mock API!");
});

app.post("/api/emailupdates", (req, res, next) => {
  const data = req.body;
  if (data.email === "fesaza@gmail.com") {
    return res.status(500).json({
      status: "error",
      message: "Invalid Subscription request.",
    });
  }

  return res.status(200).json({
    status: "success",
    message: "Thank you. You are now subscribed.",
  });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
