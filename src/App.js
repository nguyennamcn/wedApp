import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from "./Page/HomePage/HomePage";
import LoginPage from './Page/UserPage/LoginPage';
import SignUpPage from './Page/UserPage/SignUpPage';
import ErrorPage from './Page/ErrolPage/ErrorPage';
import LoadingPage from './Components/Spinner/LoadingPage'; // Import LoadingPage
import AdminPage from './Page/AdminPage/AdminPage';
import LoginPageTest from './Page/AdminPage/LoginPageTest';
import RegisterSell from './Page/SellerPage/RegisterSell';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Giả lập thời gian tải (2 giây)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <LoadingPage />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/signup' element={<SignUpPage />} />
            <Route path='/test' element={<AdminPage />} />
            <Route path='/test2' element={<LoginPageTest />} />
            <Route path='/regis/sell' element={<RegisterSell />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
