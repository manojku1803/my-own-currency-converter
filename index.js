import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi('fca_live_OqaGEdKwoCDf3Q8rEDZYTq2NsjTKoArdxs33HGRz');

currencyConverter("INR", "USD", 3);

async function currencyConverter(fromCurrency, toCurrency, units) {
    const res = await freecurrencyapi.latest({
        base_currency: fromCurrency,
        currencies: toCurrency
    });

    const multiplier = res.data[toCurrency];
    return multiplier*units;
}


