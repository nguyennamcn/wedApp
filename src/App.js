import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from  "./Page/HomePage/HomePage"
import LoginPage from './Page/UserPage/LoginPage';
import SignUpPage from './Page/UserPage/SignUpPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/signup' element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
