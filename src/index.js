import app from "./app";
import { config } from "dotenv";
import "./database";
import chalk from "chalk";

config();

const PORT = process.env.PORT || 3000;

app.listen(PORT);

console.log(chalk.green(`server is running on port ${PORT}`));
