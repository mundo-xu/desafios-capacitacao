import express from "express";
import pessoaRoute from "./pessoas.route";

const app = express();
app.use(express.json());

app.use("/pessoas", pessoaRoute);

export default app;
