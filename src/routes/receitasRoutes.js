import express from "express";
import receitasController from "../controllers/receitasController.js";


const receitasRoutes = express.Router();

receitasRoutes
    .get("/receitas", receitasController.listarReceitas)
    .get("/receitas/:id", receitasController.listarReceitasPorId)
    .post("/receitas", receitasController.CriarReceita)
    .put("/receitas/:id", receitasController.alterarReceitas)
    .delete ("/receitas/:id", receitasController.deletarReceitas)

export default receitasRoutes;