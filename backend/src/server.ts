import express from "express";
import cors from "cors";

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`Sever is running on port: ${port}`);
});

module.exports = app;
