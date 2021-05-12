const express = require("express");

const app = express();
const port = 3000;

const users = ["John", "Mark"];
//pulse check q1
const logUsers = (req, res, next) => {
  console.log(users);
  next();
};
//pulse check q2
//application-level middleware
app.use(logUsers);

//pulse check q3
const logMethod = (req, res, next) => {
  console.log(req.method);
  next();
};
app.use(logMethod);
app.get("/users", (req, res, next) => {
  res.json(users);
});
//pulse check q4

app.use(express.json());

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
