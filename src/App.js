import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from "./Page/HomePage/HomePage";
import ErrorPage from './Page/ErrolPage/ErrorPage';
import LoadingPage from './Components/Spinner/LoadingPage'; // Import LoadingPage
import RegisterSell from './Page/SellerPage/RegisterSell';
import Layout from './Layout/Layout';
import DetailPage from './Page/DetailPage/DetailPage';

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
            <Route path='/' element={<Layout Component={HomePage} />} />
            <Route path='/detail' element={<Layout Component={DetailPage} />} />
            <Route path='/regis/sell' element={<RegisterSell />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
