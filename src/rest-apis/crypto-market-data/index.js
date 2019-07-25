var Arbitrage = require('./arbitrage');
var ExchangeRates = require('./exchange-rates');
var Meta = require('./meta');
var OHLCV = require('./ohlcv');
var Quotes = require('./quotes');
var Trades = require('./trades');

class CryptoMarketData {

    constructor(...props) {
        this.arbitrage = new Arbitrage(...props);
        this.exchangeRates = new ExchangeRates(...props);
        this.meta = new Meta(...props);
        this.OHLCV = new OHLCV(...props);
        this.quotes = new Quotes(...props);
        this.trades = new Trades(...props);
    }

}

module.exports = CryptoMarketData;