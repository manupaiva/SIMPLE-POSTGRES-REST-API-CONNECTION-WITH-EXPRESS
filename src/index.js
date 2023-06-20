import app from "./app.js";
import dotenv from "dotenv";
dotenv.config();
import { sequelize } from "./database/database.js";

import "./models/Project.js";
import "./models/Task.js";

const PORT = process.env.PORT || 3000;

async function main() {
  try {
    await sequelize.sync();
    console.log("Connection has been established successfully.");
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
main();
