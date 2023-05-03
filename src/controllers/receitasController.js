import Receita from '../models/Receitas.js';

const listarReceitas = async (req, res, next) => {

    try {

        const { titulo, pagina = 1 } = req.query;

        const itensPorPagina = 10;

        const filtro = titulo ? { titulo: new RegExp(titulo) } : {};

        const totalItens = await Receita.countDocuments(filtro);

        const receitas = await Receita.find(filtro)
        .skip((pagina - 1) * itensPorPagina)
        .limit(itensPorPagina);

        const totalPaginas = Math.ceil(totalItens / itensPorPagina);

        res.status(200);
        //res.send(receitas);
    } catch (err) {
        next(err);
    }

}


const listarReceitasPorId = async (req, res, next) => {

    try {
        const receitas = await Receita.findById(req.params.id);
        res.status(200);
        res.send(receitas);
    } catch (err) {
        next(err);
    }

}

const CriarReceita = async (req, res, next) => {

    try {
        const { titulo, tempoPreparo, porcoes, imagem } = req.body;

        const novaReceita = new Receita({
            titulo,
            tempoPreparo,
            porcoes,
            imagem
        });

        const receitaSalva = await novaReceita.save();
        res.status(201).send(receitaSalva);
    } catch (err) {
        next(err);
    }


}

const alterarReceitas = async (req, res, next) => {

    try {
        const receitas = await Receita.findById(req.params.id);

        receitas.titulo = req.body.titulo;
        receitas.tempoPreparo = req.body.tempoPreparo;
        receitas.porcoes = req.body.porcoes;
        receitas.imagem = req.body.imagem;

        await receitas.save();

        res.status(200);
        res.send(receitas);
    } catch (err) {
        next(err);
    }


}

const deletarReceitas = async (req, res, next) => {

    try {
        const receitas = await Receita.findByIdAndDelete(req.params.id);

        res.status(200);

        if (receitas != null) {
            res.send({ mensagem: "Receita deletada com sucesso", receitas: receitas });
        } else {
            res.send({ mensagem: "Receita não encontrada" });
        }
    } catch (err) {
        next(err);
    }

}

const receitasController = {
    listarReceitas, listarReceitasPorId, CriarReceita, alterarReceitas, deletarReceitas
}

export default receitasController;