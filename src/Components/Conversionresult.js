import React from 'react'

const Conversionresult = ({amount,selectedCountries,countryList,calculatedAmount}) => {
  return (
    <div>
       {`${amount || 0.0} ${
          countryList.find(
            (item) => item.country === selectedCountries.country1
          )?.currency || "Indian Rupee"
        }s`}{" "}
        =
        <span>
          {" "}
          {`${calculatedAmount.toFixed(3) || 0} ${
            countryList.find(
              (item) => item.country === selectedCountries.country2
            )?.currency || "Euro"
          }s`}
        </span> 
    </div>
  )
}

export default Conversionresult