// swift.ts

import axios from 'axios';

const WISE_API_URL = 'https://api.transferwise.com/v1';
const WISE_API_KEY = 'your_api_key_here'; // Replace with your Wise API key

export const handleSWIFTTransfer = async (amount: number, currency: string, recipientAccount: string) => {
    try {
        const response = await axios.post(`${WISE_API_URL}/transfers`, {
            amount,
            currency,
            recipientAccount,
        }, {
            headers: {
                'Authorization': `Bearer ${WISE_API_KEY}`,
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error processing SWIFT transfer:', error);
        throw error;
    }
};
