import receitasRoutes from "./receitasRoutes.js";
import handleNotFound from "../util/handleNotFound.js";
import handleError from "../util/handleError.js";
import handleValidationErros from "../util/handleValidationErros.js";

const routes = (app) => {
    app.get("/ping", (req, res) => {
        res.status(200);
        res.send({resposta: "pong"});
    });

    app.use(receitasRoutes);
    app.use(handleNotFound);
    app.use(handleValidationErros);
    app.use(handleError);
};



export default routes;
    