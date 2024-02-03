import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Currencyconvertor from './Currencyconvertor';

function App() {
  return (
   <React.Fragment>
    <Routes>
      <Route path='/' element={<Currencyconvertor/>}></Route>
    </Routes>
   </React.Fragment>
  );
}

export default App;
