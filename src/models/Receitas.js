import mongoose from "mongoose";


const receitaSchema = new mongoose.Schema({

    titulo: {type: String, required: [true, "o titulo da receita não pode estar em branco!"], minlength: [10, "o titulo da receita deve ter no mínimo 10 caracteres!"]},
    tempoPreparo: {type: Number, required: true, validate: {validator: v =>{return v<10}, message: "o tempo de preparo deve ser menor que 10 minutos!"}},
    porcoes: {type: Number, required: true},
    imagem: {type: String, required: true},



});

const Receita = mongoose.model("Receitas", receitaSchema);

export default Receita;