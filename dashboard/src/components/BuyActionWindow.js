import React, { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {

  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0);

  const { closeBuyWindow } = useContext(GeneralContext);

  const API = process.env.REACT_APP_API_URL;

  const handleBuyClick = async () => {
    console.log("BUY BUTTON CLICKED");

    try {
      if (!API) {
        alert("API URL missing");
        return;
      }

      const response = await axios.post(
        `${API}/newOrder`,
        {
          name: uid,
          qty: Number(stockQuantity),
          price: Number(stockPrice),
          mode: "BUY",
        },
        { withCredentials: true }
      );

      console.log("Server Response:", response.data);

      alert("Order Saved Successfully!");

      closeBuyWindow();

    } catch (err) {
      console.log("ERROR:", err);

      if (err.response) {
        alert(`Failed to save order: ${err.response.data}`);
      } else {
        alert("Server not reachable!");
      }
    }
  };

  const handleCancelClick = () => {
    closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              min="1"
              value={stockQuantity}
              onChange={(e) => setStockQuantity(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              step="0.05"
              min="0"
              value={stockPrice}
              onChange={(e) => setStockPrice(e.target.value)}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>
          Margin required ₹
          {(stockQuantity * stockPrice).toFixed(2)}
        </span>

        <div>
          <button
            type="button"
            className="btn btn-blue"
            onClick={handleBuyClick}
          >
            Buy
          </button>

          <button
            type="button"
            className="btn btn-grey"
            onClick={handleCancelClick}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;