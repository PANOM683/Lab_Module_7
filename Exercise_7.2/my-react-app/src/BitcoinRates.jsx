import { useState, useEffect } from "react";
import { useData } from "./hooks/useData";

// currencies array of strings representing different currencies
const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];


// useData fetch data from an API endpoint. 
//btcResponse is the response data from the API, which is an object containing the Bitcoin price in the selected currency.
function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);
  const btcResponse = useData(
    `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`
  );
  const btcPrice = btcResponse
    ? btcResponse.bitcoin[currency.toLowerCase()]
    : 0;

  const options = currencies.map((curr) => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));

  return (
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate</h3>
      <label>
        Choose currency:
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          {options}
        </select>
      </label>
      <div>
        1 BTC is worth {btcPrice} {currency}
      </div>
    </div>
  );
}

export default BitcoinRates;
