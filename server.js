const express = require("express");
const app = express();
const port = 4000;

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/api/emailupdates", (req, res) => {
  const data = res.json(req.body);
  res.send(data);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
