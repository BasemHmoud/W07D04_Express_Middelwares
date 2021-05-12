const express = require("express");

const app = express();
const port = 3000;

//pulse check q4
app.use(express.json());

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
  //if array user empty send error "no users" and status 500
  if (users.length === 0) {
    const err = new Error("no users");
    err.status = 500;
    next(err);
    //if array user not empty return all user
  } else {
    res.json(users);
  }
});

//pulse check q5

app.use((err, req, res, next) => {
  // set the status code
  res.status(err.status);
  // send the response in JSON format
  res.json({
    error: {
      status: err.status,
      message: err.message,
    },
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
