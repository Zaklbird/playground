const express = require("express");
const cors = require("cors");
const users = require("./routes/users");
require("dotenv").config();

const PORT = process.env.EXPRESS_PORT;

async function main() {
  const app = express();
  app.use(express.json());
  app.use(cors());
  app.set("trust proxy", true);

  app.get("/", (req, res) => {
    return res.send("Server side index.");
  });

  app.use("/users", users);

  app.get("*", (_req, res) => {
    return res.status(404).send("404 route not found.");
  });

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

main().catch((error) => console.log(error));
