import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from "./Page/HomePage/HomePage";
import ErrorPage from './Page/ErrolPage/ErrorPage';
import LoadingPage from './Components/Spinner/LoadingPage'; // Import LoadingPage
import RegisterSell from './Page/SellerPage/RegisterSell';
import Layout from './Layout/Layout';
import DetailPage from './Page/DetailPage/DetailPage';
import SettingPage from './Page/UserPage/SettingPage';
import LayoutUser from './Layout/LayoutUser';
import ProtectedRoute from './Components/Protectedroute/ProtectedRoute';
import IntroPage from './Page/IntroPage/IntroPage';
import LoginPageTest from './Page/AdminPage/LoginPageTest';
import AddressPage from './Page/UserPage/AddressPage';

function App() {

  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path='/home' element={<Layout Component={HomePage} />} />
            <Route path='/settings' element={<ProtectedRoute><LayoutUser Component={SettingPage} /></ProtectedRoute>} />
            <Route path='/settings/address' element={<ProtectedRoute><LayoutUser Component={AddressPage} /></ProtectedRoute>} />
            <Route path='/detail' element={<Layout Component={DetailPage} />} />
            <Route path='/regis/sell' element={<RegisterSell />} />
            <Route path='*' element={<ErrorPage />} />
            <Route path='/' element={<IntroPage />} />
            <Route path='/1' element={<LoginPageTest />} />
            <Route path='/2' element={<LoadingPage />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
