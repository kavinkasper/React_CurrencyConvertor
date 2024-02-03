import React from 'react'
import TextField from "@mui/material/TextField"
const AmountInput = ({ amount, handleAmountInput }) => {
  return (
    <div>
        <h2 style={{ marginTop: "10px" }}>Amount</h2>
          <TextField
            id="outlined-basic"
            value={amount}
            onInput={handleAmountInput}
            variant="outlined"
            style={{ marginTop: "8px" }}
          />
    </div>
  )
}

export default AmountInput