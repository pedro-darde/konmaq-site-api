import "../database/connection";
import app from "./config/app";
import dotenv from "dotenv";
dotenv.config();

process.on("uncaughtException", (err, origin) => {
  console.log({ origin, err });
});

process.on("unhandledRejection", async (reason) => {
  await reason;
  console.log(reason);
});

app.listen(process.env.PORT || 3335, () => {
  console.log(`Server running at ${process.env.PORT}`);
});
