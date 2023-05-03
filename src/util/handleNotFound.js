const handleNotFound = (req, res) => {
    res.status(404)
    res.send({mensagem: "Não encontrado"})
}

export default handleNotFound;