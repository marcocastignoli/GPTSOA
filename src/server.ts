import { app } from "./app";
import express from "express";

const port = process.env.PORT || 3333;

app.use("/.well-known", express.static("./public"));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
