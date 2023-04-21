import express from "express";
import { router } from "./routes";
import path from "path";

const PORT = 3333;

const app = express();

app.use(express.json());
app.use(router);

app.use("/images", express.static(path.join(__dirname, "..", "uploads")));

app.listen(PORT, () => console.log("listening on port " + PORT));
