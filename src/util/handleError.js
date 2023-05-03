const handleError  = (err, req, res) => {
    console.log(err);
    res.status(500)
    res.send({mensagem: "Ocorreu algum erro no servidor!"});
}

export default handleError;