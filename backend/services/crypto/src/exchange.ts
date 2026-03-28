import { Binance } from 'ccxt';

class CryptoExchangeHandler {
    constructor() {
        this.exchange = new Binance();
    }

    async fetchTicker(symbol) {
        try {
            const ticker = await this.exchange.fetchTicker(symbol);
            return ticker;
        } catch (error) {
            console.error(`Failed to fetch ticker for ${symbol}:`, error);
            throw error;
        }
    }

    async fetchOrderBook(symbol) {
        try {
            const orderBook = await this.exchange.fetchOrderBook(symbol);
            return orderBook;
        } catch (error) {
            console.error(`Failed to fetch order book for ${symbol}:`, error);
            throw error;
        }
    }

    async placeMarketOrder(symbol, amount) {
        try {
            const order = await this.exchange.createMarketOrder(symbol, 'buy', amount);
            return order;
        } catch (error) {
            console.error(`Failed to place market order for ${symbol}:`, error);
            throw error;
        }
    }
}

export default CryptoExchangeHandler;