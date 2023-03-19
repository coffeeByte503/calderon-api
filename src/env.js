import chalk from "chalk";
import { config } from "dotenv";

config();

const { SECRETE } = process.env;

if (!SECRETE) {
  console.log(chalk.red(`SECRETE not set in environment variables`));
}

const { MONGODB_URI, MONGODB_DBNAME } = process.env;

if (!MONGODB_URI) {
  console.error(chalk.red("MONGODB_URI not set in environment variables"));
  process.exit(1);
}

if (!MONGODB_DBNAME) {
  console.error(chalk.red("MONGODB_DBNAME not set in environment variables"));
  process.exit(1);
}

export default {
  MONGODB_DBNAME,
  MONGODB_URI,
  SECRETE,
};
