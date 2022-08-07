import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Container } from '@mui/material';

import Header from './components/Common/Header/Header';
import Footer from './components/Common/Footer/Footer';
import Images from './components/Images/Images';
import Auth from './components/Auth/Auth';
import SigninSide from './components/Auth/SigninSide';

function App() {
  return (
    <div className="App">
      <Header />
        <Container maxWidth="xl">
          <Routes>
              <Route path="/" element={<Images />} />
              <Route path="/signin" element={<SigninSide />} />
          </Routes>
          <Footer />
        </Container>
    </div>
  );
}

export default App;
