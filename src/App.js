import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import { usePointerSync } from './hooks/pointer';
import Signup from './components/signUp';
import Signin from './components/signIn';
import Home from './components/home';

function App() {
  usePointerSync();

  const [isLogin, setIsLogin] = useState(localStorage.getItem('isLogin')
    ? localStorage.getItem('isLogin')
    : localStorage.getItem('isLogin') === 'true');

  const [token, setToken] = useState(localStorage.getItem('token')
    ? localStorage.getItem('token')
    : '')

  return (
    <Router>
      <Header isLogin={isLogin} setIsLogin={setIsLogin} />
      <Routes>
        <Route path="/" element={<Home isLogin={isLogin} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin 
          setToken={setToken}
          setIsLogin={setIsLogin} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;