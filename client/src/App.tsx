import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Container } from '@mui/material';

import Header from './components/Common/Header/Header';
import Footer from './components/Common/Footer/Footer';

import SigninSide from './components/Auth/SigninSide';
import Signup from './components/Auth/Signup';

import Images from './components/Images/Images';
import Receipt from './components/Receipt/Receipt';

function App() {
  return (
    <div className="App">
		<div style={{ marginBottom: '20px' }}>
	  		<Header />
		</div>
        <Container maxWidth="xl">
          <Routes>
              <Route path="/" element={<Receipt />} />
              <Route path="/signin" element={<SigninSide />} />
              <Route path="/temp-signup" element={<Signup />} />
          </Routes>
          <Footer />
        </Container>
    </div>
  );
}

export default App;
