import { useState, useEffect } from "react";
import { useData } from "../hooks/useData";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);
  const btcResponse = useData(
    `https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=${currency}`
  );
  const btcPrice = btcResponse
    ? btcResponse.bitcoin[currency.toLowerCase()]
    : 0;
  const { emoji } = useEmojiContext();

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
        1 BTC is worth {btcPrice} {currency} {emoji}
      </div>
    </div>
  );
}

export default BitcoinRates;
