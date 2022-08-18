import BaseJoi from 'joi';
import JoiDate from '@joi/date';
const Joi = BaseJoi.extend(JoiDate);

const dateSchema = Joi.object({
    date: Joi.date()
            .format('YYYY-MM-DD')
            .required()
})

export default dateSchema