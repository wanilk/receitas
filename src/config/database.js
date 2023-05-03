import { response } from "express";
import mongoose from "mongoose";

const URL = "mongodb://localhost:27017/db_receitas";

await mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,})
.then(response => console.log("Conectado ao banco de dados"))
.catch(error => console.log("Erro ao conectar ao banco de dados"));

let db = mongoose.connection;

export default db;