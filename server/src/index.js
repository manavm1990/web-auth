import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";

dotenv.config();

const app = express();

const appUrl = process.env.BASE_URL || `http://localhost:${process.env.PORT}`;

app.use(morgan("combined"));

app.listen(process.env.PORT, () => {
  console.info(`🏃🏽‍♂️ at ${appUrl}`);
});
