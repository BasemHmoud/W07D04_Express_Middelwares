const express = require("express");

const app = express();
const port = 3000;
app.use(express.json());
const users = ["John", "Mark"];
//pulse check q1
const logUsers =(req, res, next)=>{
    console.log(users);
    next()
}
app.use(logUsers)

app.get("/users", (req, res, next) => {
  res.json(users);
});



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


