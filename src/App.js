import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/layout/footer';
import Header from './components/layout/header';
import { usePointerSync } from './hooks/pointer';
import Signup from './pages/auth/signUp';
import Signin from './pages/auth/signIn';
import Home from './pages/Home/home';
import Admin from './pages/Admin/Admin';

function App() {
  usePointerSync();

  const [isLogin, setIsLogin] = useState(localStorage.getItem('isLogin')
    ? localStorage.getItem('isLogin')
    : localStorage.getItem('isLogin') === 'true');

  return (
    <Router>
      <Header isLogin={isLogin} setIsLogin={setIsLogin} />
      <Routes>
        <Route path="/" element={<Home isLogin={isLogin} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/signin" element={<Signin 
          setIsLogin={setIsLogin} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
