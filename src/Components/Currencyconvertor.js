import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Currencyconvertor.css";
import Header from "./Header";
import Footer from "./Footer ";
import AmountInput from "./AmountInput";
import Countryselection from "./Countryselection";
import Conversionresult from "./Conversionresult";
import Currencydescription from "./Currencydescription";
import apiConfig from "../Apiconfig/Apikey";

const Currencyconvertor = () => {
  const [amount, setAmount] = useState(0);
  const [calculatedAmount, setCalculatedAmount] = useState(0);

  const [countryList, setCountryList] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState({
    country1: "",
    country2: "",
  });

  let REQ_URL="https://currency-exchange.p.rapidapi.com";

  const options = {
    method: "GET",
    url: `${REQ_URL}/listquotes`,
    headers: {
      "X-RapidAPI-Key": `${apiConfig.apiKey}`,
      "X-RapidAPI-Host": "currency-exchange.p.rapidapi.com",
    },
  };

  const options1 = {
    method: "GET",
    url: `${REQ_URL}/exchange`,
    params: {
      from: selectedCountries.country1,
      to: selectedCountries.country2,
      q: "1",
    },
    headers: {
      "X-RapidAPI-Key": `${apiConfig.apiKey}`,
      "X-RapidAPI-Host": "currency-exchange.p.rapidapi.com",
    },
  };

  useEffect(() => {
    try {
      fetchData();
      handleConversion();
    } catch (err) {
      console.log(err);
    }
  }, [selectedCountries, amount]);
  {/*useEffect will render whenever selectedCountries or amount changes  */}

  const handleAmountInput = (event) => {
    try {
      const inputValue = event.target.value;
      setAmount(inputValue);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.request(options);

      const formattedCurrencyData = [];
      for (const item of response.data) {
        const countryData = await getCountryData(item);
        formattedCurrencyData.push({
          id: countryData.id,
          country: item,
          currency: countryData.rup,
          image_Url: countryData.image_url,
        });
      }
      setCountryList(formattedCurrencyData);
    } catch (error) {
      console.error(error);
    }
  };

  const getCountryData = async (country) => {
    try {
      const jsondata = await axios.get("http://localhost:3500/country");
      const countrydata = jsondata.data.find((cou) => cou.name === country);
      return countrydata;
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange1 = (event) => {
    try {
      setSelectedCountries((prev) => ({
        ...prev,
        country1: event.target.value,
      }));
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange2 = (event) => {
    try {       
      setSelectedCountries((prev) => ({
        ...prev,
        country2: event.target.value,
      }));
    } catch (err) {
      console.log(err);
    }
  };

  const handleConversion = async () => {
    try {
      const response = await axios.request(options1);
      const initialAmount = amount;
      const finalAmount = response.data * initialAmount;
      setCalculatedAmount(finalAmount);
    } catch (error) {
      console.error(error);
    }
  };

  const handlebuttonchange = () => {
    try {
      if (selectedCountries.country1 && selectedCountries.country2) {
        setSelectedCountries((prev) => ({
          ...prev,
          country1: prev.country2,
          country2: prev.country1,
        }));
      } else {
        setSelectedCountries((prev) => ({
          ...prev,
          country1: "EUR",
          country2: "INR",
        }));
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
    {/* Header Component */}
      <Header />
      <div className="conversion-description">
      {/* Currencydescription component gives small detail about conversion */}
        <Currencydescription
          countryList={countryList}
          selectedCountries={selectedCountries}
        />
      </div>
      <div className="currency-converter-container">
        <div className="amount-input-section">
        {/* AmountInput component to get the amount value from the user which is to be converted */}
          <AmountInput 
          amount={amount} 
          handleAmountInput={handleAmountInput} 
          />
        </div>
        <div className="conversion-section">
        {/* Countryselection component to get the two country details from the user */}
          <Countryselection
            selectedCountries={selectedCountries}
            countryList={countryList}
            handleChange1={handleChange1}
            handleChange2={handleChange2}
            handlebuttonchange={handlebuttonchange}
          />
        </div>
      </div>
      <h1 className="conversion-result">
      {/* Conversionresult component shows the desired output */}
        <Conversionresult
          selectedCountries={selectedCountries}
          amount={amount}
          countryList={countryList}
          calculatedAmount={calculatedAmount}
        />
      </h1>
    {/* Footer component */}
      <Footer />
    </div>
  );
};

export default Currencyconvertor;
