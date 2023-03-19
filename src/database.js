import mongoose from "mongoose";
import env from "./env";
import chalk from "chalk";

const { MONGODB_URI, MONGODB_DBNAME } = env;

mongoose.set("strictQuery", true);

mongoose
  .connect(`${MONGODB_URI}/${MONGODB_DBNAME}`)
  .then((db) => {
    console.log(chalk.green("Database connection established successfully"));
  })
  .catch((error) => {
    console.error(chalk.red(`Error connecting to database: ${error.message}`));
    process.exit(1);
  });

process.on("SIGINT", async () => {
  await mongoose.disconnect();
  process.exit(0);
});
