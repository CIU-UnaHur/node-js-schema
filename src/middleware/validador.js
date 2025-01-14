const schema = require('../schema/producto.schema')

const validador = (req, res, next) => {
    const result = schema.validate(req.body)
    if(result.error){
        console.log(result.error.details)
        return res.status(400).json({message: result.error.details[0].message})
    }
    next()
}

module.exports = validador