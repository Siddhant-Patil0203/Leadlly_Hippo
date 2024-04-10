import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import * as dotenv from "dotenv";
dotenv.config();

import userRoutes from "./routes/user";
import productsRoutes from "./routes/products";

const app = express();

app.use(bodyParser.json({ limit: "30mb"}));
app.use(bodyParser.urlencoded({ limit: "30mb" }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("LeadllyHippo Server ...");
});

// Routes 
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/products", productsRoutes);

// MongoDB Config
const CONNECTION_URL = process.env.MONGO_URL!;
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`))
  )
  .catch((error) => console.log(error.message));


