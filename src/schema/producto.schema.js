const Joi = require('joi')

const schema = Joi.object({
    nombre: Joi.string().min(3).required(),
    precio: Joi.number().min(1).required()
})

module.exports = schema