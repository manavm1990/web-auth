import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";

dotenv.config();

const appUrl = process.env.BASE_URL || `http://localhost:${process.env.PORT}`;

const app = express();
app.set("view engine", "ejs");
app.use(morgan("combined"));

app.get("/", (req, res) => {
  res.render("home", { user: req.openid && req.openid.user });
});

app.get("/expenses", (req, res) => {
  res.render("expenses", {
    expenses: [
      {
        date: new Date(),
        description: "Coffee for a Coding Dojo session.",
        value: 42,
      },
    ],
  });
});

app.listen(process.env.PORT, () => {
  console.info(`🏃🏽‍♂️ at ${appUrl}`);
});
