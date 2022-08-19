import Joi from "joi";

const cakeSchema = Joi.object({
    name: Joi.string()
            .min(2)
            .max(40)
            .required(),
    price: Joi.number()
            .positive()
            .greater(0)
            .precision(2)
            .options({ convert: false })
            .required(),
    image: Joi.string()
            .uri()
            .required(),
    description : Joi.string()
            .allow('') //a descrição aceita vazio como string.
            .required() 
})

export default cakeSchema
