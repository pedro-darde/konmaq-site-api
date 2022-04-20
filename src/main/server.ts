import "../database/connection";
import app from "./config/app";
import dotenv from "dotenv";
dotenv.config();

app.listen(process.env.PORT || 3335, () => {
  console.log(`Server running at ${process.env.PORT}`);
});
