// Lab Exercise 7.1

import React, { useState, useEffect } from "react";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

function BitcoinRates() {
  // two lines of code 'currency' variable is initialized with the first currency in the currencies array,
  // while the 'btcprice' variable is initialized with a value of null.
  const [currency, setCurrency] = useState(currencies[0]);
  const [btcPrice, setBtcPrice] = useState(null);

  // useEffect hook that fetches the bitcoin price from the CryptoCompare API
  // the hook is triggered whenever the 'currency' variable changes
  // the 'fetchBitcoinPrice is async function that makes a GET request to the API
  useEffect(() => {
    const fetchBitcoinPrice = async () => {
      try {
        const response = await fetch(
          `https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=${currency}`
        );
        const data = await response.json();
        setBtcPrice(data[currency]);
      } catch (error) {
        console.error("Error fetching Bitcoin price:", error);
      }
    };

    fetchBitcoinPrice();
  }, [currency]);

  // created using the map method, which iterates over the currencies array and create an option element for each currency
  const options = currencies.map((curr) => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));

  // there is a conditional statement that displays the fetched bitcoin price if it is not null,
  // or a "Loading..." message if it is null.
  return (
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate</h3>
      <label>
        Choose currency:
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          {options}
        </select>
      </label>
      {btcPrice !== null ? (
        <div>
          1 BTC is worth {btcPrice} {currency}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default BitcoinRates;
