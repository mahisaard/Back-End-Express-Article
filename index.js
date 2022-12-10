import express from "express";
import bodyParser from "body-parser";

import articlesRoutes from "./routes/articles.js";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use("/articles", articlesRoutes);
app.get("/", (req, res) => res.send("Welcome to the Article API!"));
app.all("*", (req, res) =>res.send("You've tried reaching a route that doesn't exist."));

app.listen(PORT, () =>console.log(`Server running on port: http://localhost:${PORT}`));