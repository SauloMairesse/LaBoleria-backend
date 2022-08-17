import Joi from "joi";

const clientSchema = Joi.object({
    name: Joi.string()
            .max(50)
            .required(),
    address: Joi.string()
            .max(254)
            .required(),
    phone: Joi.string()
            .min(10)
            .max(11)
            .pattern(new RegExp(/^[0-9]+$/))
            .required()
})

export default clientSchema