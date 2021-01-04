import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const dbLink = process.env.DB_LINK;
mongoose.connect(dbLink, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const db = mongoose.connection;
db.on("error", (err) => {
  console.log(err);
});

db.once("open", function () {
  console.log("MongoDB database connection established successfully");
});

export default db;
