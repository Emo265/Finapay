// AML Screening Handler using ComplyAdvantage API

const axios = require('axios');

const COMPLY_ADVANTAGE_API_URL = 'https://api.complyadvantage.com/v1/screening';
const API_KEY = process.env.COMPLY_ADVANTAGE_API_KEY; // Set your API key in the environment variables

/**
 * AML Screening Handler
 * @param {Object} customerData - Data of the customer to screen.
 * @returns {Promise<Object>} - The response from ComplyAdvantage API.
 */
async function amlScreeningHandler(customerData) {
    try {
        const response = await axios.post(COMPLY_ADVANTAGE_API_URL, customerData, {
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error occurred during AML screening:', error);
        throw error;
    }
}

module.exports = amlScreeningHandler;