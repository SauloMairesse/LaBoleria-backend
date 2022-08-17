import Joi from "joi";

const orderSchema = Joi.object({
    clientId: Joi.number()
            .integer()
            .options({ convert: false })
            .required(),
    cakeId: Joi.number()
            .integer()
            .options({ convert: false })
            .required(),
    quantity: Joi.number()
            .integer()
            .options({ convert: false })
            .greater(0)
            .max(4) //**menor que 5**
            .required(),
    totalPrice: Joi.number()
            .positive()
            .greater(0)
            .precision(2)
            .options({ convert: false })
            .required()
})

export default orderSchema