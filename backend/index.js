const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const mainRouter = require("./routes/index");
const app = express();

app.use(cors());
app.use("/api/v1", mainRouter);
app.use(express.json());

app.listen(3000, () => {
  console.log("Server Running on port 3000");
});
