import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Container } from '@mui/material';

import Header from './components/Common/Header/Header';
import Footer from './components/Common/Footer/Footer';
import Images from './components/Images/Images';

import SigninSide from './components/Auth/SigninSide';
import Signup from './components/Auth/Signup';

function App() {
  return (
    <div className="App">
      <Header />
        <Container maxWidth="xl">
          <Routes>
              <Route path="/" element={<Images />} />
              <Route path="/signin" element={<SigninSide />} />
              <Route path="/temp-signup" element={<Signup />} />
          </Routes>
          <Footer />
        </Container>
    </div>
  );
}

export default App;
