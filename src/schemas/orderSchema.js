import Joi from "joi";

const orderSchema = Joi.object({
    clientId: Joi.number()
            .integer()
            .required(),
    cakeId: Joi.number()
            .integer()
            .required(),
    quantity: Joi.number()
            .integer()
            .greater(0)
            .max(4) //menor que 5
            .required(),
    totalPrice: Joi.number()
            .positive()
            .greater(0)
            .precision(2)
            .required()
})

export default orderSchema
