import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import db from "./db.js";
import auth from "./auth.js";
import membershipsRouter from "./routes/memberships.js";
import usersRouter from "./routes/users.js";
import formsRouter from "./routes/forms.js";

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const port = 5005;
app.use(express.json({ limit: "50mb" }));

app.use(
  cors({
    exposedHeaders: [
      "Access-Control-Allow-Origin",
      "Vary",
      "Content-Length",
      "x-auth-token",
    ],
  })
);

//app.all("*", auth);

app.use("/memberships", membershipsRouter);
app.use("/users", usersRouter);
app.use("/forms", formsRouter);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.listen(port, function () {
  console.log("Example app listening on port 5005!");
});
