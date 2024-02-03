import React from 'react'
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { RiExchangeFill } from "react-icons/ri";


const Countryselection = ({selectedCountries,countryList,handleChange1,handleChange2,handlebuttonchange}) => {
  return (
    <div style={{display:"flex"}}>
        <div className="from-section">
            <h2>From</h2>
            <FormControl sx={{ m: 1, minWidth: 250 }}>
              <InputLabel id="demo-simple-select-autowidth-label">
                From
              </InputLabel>

              <Select
                value={selectedCountries.country1 || "INR"}
                onChange={handleChange1}
                label="Country and Currency"
              >
                {countryList.map((item) => (
                  <MenuItem key={item.id} value={item.country}>
                    <img
                      src={item.image_Url}
                      className="currency-flag"
                      alt={item.country}
                    />
                    {`${item.country} - ${item.currency}`}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div>
            <div className="exchange-button" onClick={handlebuttonchange}>
              <RiExchangeFill />
            </div>
          </div>
          <div className="to-section">
            <h2>To</h2>
            <FormControl sx={{ m: 1, minWidth: 250 }}>
              <InputLabel id="demo-simple-select-autowidth-label">
                TO
              </InputLabel>
              <Select
                value={selectedCountries.country2 || "EUR"}
                onChange={handleChange2}
                label="Country and Currency"
              >
                {countryList.map((item) => (
                  <MenuItem key={item.id} value={item.country}>
                    <img
                      src={item.image_Url}
                      className="currency-flag"
                      alt={item.country}
                    />
                    {`${item.country} - ${item.currency}`}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>
  )
}

export default Countryselection