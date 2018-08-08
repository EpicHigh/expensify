import React from "react";
import Routes from "../routes";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import numeral from "numeral";


numeral.register("locale", "th", {
  delimiters: {
    thousands: ",",
    decimal: "."
  },
  currency: {
    symbol: "฿"
  }
});

numeral.locale("th");

const App = () => (
  <div>
    <Header />
    <Navbar />
    <Routes />

  </div>
);

export default App;
