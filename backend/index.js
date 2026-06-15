require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const HoldingsModel = require("./models/HoldingsModel");
const PositionsModel = require("./models/PositionsModel");
const OrdersModel = require("./models/OrdersModel");

const authRoute = require("./Routes/AuthRoute");

const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;

const app = express();

// =====================
// CORS
// =====================
app.use(
  cors({
    origin: [
      "https://stockweb-2.onrender.com",
      "https://stockweb-3.onrender.com",
    ],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// =====================
// AUTH ROUTES
// =====================
app.use("/auth", authRoute);

// =====================
// TEST ROUTE
// =====================
app.get("/test", (req, res) => {
  res.send("Backend Working");
});

// =====================
// HOLDINGS
// =====================
app.get("/allHoldings", async (req, res) => {
  try {
    const allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// =====================
// POSITIONS
// =====================
app.get("/allPositions", async (req, res) => {
  try {
    const allPositions = await PositionsModel.find({});
    res.json(allPositions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// =====================
// NEW ORDER
// =====================
app.post("/newOrder", async (req, res) => {
  try {
    const newOrder = new OrdersModel(req.body);
    await newOrder.save();

    res.status(201).json({
      success: true,
      message: "Order saved successfully",
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// =====================
// DB CONNECT
// =====================
mongoose
  .connect(url)
  .then(() => {
    console.log("DB Connected");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));