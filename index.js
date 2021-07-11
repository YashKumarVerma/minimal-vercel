const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({ alive: true });
});

const port = process.env.PORT || 3000;

app.listen(port, () =>
  console.log(`Server running on ${port}, http://localhost:${port}`)
);
