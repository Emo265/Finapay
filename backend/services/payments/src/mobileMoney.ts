// mobileMoney.ts

import { AirtelAPI } from './AirtelAPI';
import { TNMAPI } from './TNMAPI';

class MobileMoneyPaymentHandler {
    constructor(private airtelAPI: AirtelAPI, private tnmAPI: TNMAPI) {}

    async makePayment(amount: number, phoneNumber: string, provider: 'Airtel' | 'TNM') {
        if (provider === 'Airtel') {
            return this.airtelAPI.processPayment(amount, phoneNumber);
        } else if (provider === 'TNM') {
            return this.tnmAPI.processPayment(amount, phoneNumber);
        } else {
            throw new Error('Invalid payment provider');
        }
    }
}

export default MobileMoneyPaymentHandler;