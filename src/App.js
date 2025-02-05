import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from "./Page/HomePage/HomePage";
import LoginPage from './Page/UserPage/LoginPage';
import SignUpPage from './Page/UserPage/SignUpPage';
import ErrorPage from './Page/ErrolPage/ErrorPage';
import LoadingPage from './Components/Spinner/LoadingPage'; // Import LoadingPage

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Giả lập thời gian tải (2 giây)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

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
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
