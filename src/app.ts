import express, { json, urlencoded } from "express";
import { RegisterRoutes } from "../build/routes";
import cors from "cors";

export const app = express();
app.use(cors());

// Use body parser to read sent json payloads
app.use(
  urlencoded({
    extended: true,
  })
);
app.use(json());

RegisterRoutes(app);
