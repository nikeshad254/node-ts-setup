import mongoose from "mongoose";
import { conf } from "./confs/conf";
import app from "./app";

const connectDB = async () => {
  mongoose
    .connect(conf.dbUrl)
    .then(() => {
      console.log("Database connected");
    })
    .catch((err) => {
      console.log("Connection Error occured");
    });
};

app.listen(conf.port, () => {
  console.log(`Listening on http://localhost:${conf.port}/api/v1/`);
  connectDB();
});
