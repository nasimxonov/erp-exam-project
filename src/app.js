import express from "express";
import "dotenv/config.js";
import Routes from "./routes/routes.js";
import errorHandling from "./middleware/error.middleware.js";
import connectDB from "./config/database.js";

const app = express();

app.use(express.json());
app.use("/api", Routes());
app.use(express.urlencoded({ extended: true }));
app.use(errorHandling);

const PORT = process.env.PORT;
const bootstrap = async () => {
  try {
    await connectDB();
    console.log("Database connecting");
    app.listen(PORT, () => {
      console.log(`Server is running on ${PORT}`);
    });
  } catch (error) {
    console.error(error.message);
  }
};

bootstrap();
