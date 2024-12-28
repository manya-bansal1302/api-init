const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors())

const PORT =  8000;

const userArray = [
  {
    id: 1,
    name: "Manya",
    email: "manya@gmail.com"
  },
  {
    id: 2,
    name: "Mimanshu",
    email: "minamshu@gmail.com"
  },
  {
    id: 3,
    name: "Ayushika",
    email: "Ayushika@gmail.com"
  }
]

app.get("/",  (req,res) => {
  res.json("Hello server started hey")
})

app.get("/users", (req, res) => {
  res.json(userArray)
})

app.listen(PORT, () => {
  console.log(`server started at ${PORT}`)
})

