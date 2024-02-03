import React from 'react'

const Currencydescription = ({selectedCountries,countryList}) => {
  return (
    <div>
        {selectedCountries.country1 || "INR"} to{" "}
        {selectedCountries.country2 || "EUR"} - Convert{" "}
        {`${
          countryList.find(
            (item) => item.country === selectedCountries.country1
          )?.currency || "Indian Rupee"
        }s`}{" "}
        to{" "}
        {`${
          countryList.find(
            (item) => item.country === selectedCountries.country2
          )?.currency || "Euro"
        }s`}
    </div>
  )
}

export default Currencydescription