const handleValidationErrors = (err, req, res, next) => {
    if (err.name === "ValidationError") {

        const erros = {};

        for (let field in err.errors) {
            erros[field] = err.errors[field].message;
        }

        res.status(422);
        res.send({ erros });
        
    } else {
        next(err);
    }
}

export default handleValidationErrors;