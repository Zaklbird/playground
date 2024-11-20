const { Router } = require("express");
const users = Router();

const data = [
  { id: 1, name: "rami", username: "rami", password: "rami", role: "admin" },
  { id: 2, name: "amir", username: "amir", password: "amir", role: "user" },
  { id: 3, name: "bob", username: "bob", password: "bob", role: "user" },
];

users.get("/", (req, res) => {
  console.log(data);

  return res.status(200).json({ message: "Data fetched correctly", data });
});

module.exports = users;
