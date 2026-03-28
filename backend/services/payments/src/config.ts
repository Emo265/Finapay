// config.ts

import * as Joi from 'joi';

const envSchema = Joi.object({
    PAYMENT_SERVICE_URL: Joi.string().uri().required(),
    PAYMENT_API_KEY: Joi.string().required(),
    PAYMENT_TIMEOUT: Joi.number().integer().min(1000).default(5000),
}).unknown();

const { error, value: envVars } = envSchema.validate(process.env);

if (error) {
    throw new Error(`Configuration validation error: ${error.message}`);
}

export const config = {
    paymentServiceUrl: envVars.PAYMENT_SERVICE_URL,
    paymentApiKey: envVars.PAYMENT_API_KEY,
    paymentTimeout: envVars.PAYMENT_TIMEOUT,
};