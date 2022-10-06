import React from 'react'

// components
import MainLayout from './Layout/MainLayout';
import Header from './components/Header/Header';

// App.css
import "./App.css";

// Routes
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// redux
import { useDispatch, useSelector } from 'react-redux';

// components
import ProductInfo from './components/productInfo/ProductInfo';
import LoginPage from './pages/Login/LoginPage';


const App = () => {

  const authLogin = useSelector(state => state?.login?.userData);
  // console.log("authLogin" , authLogin);

  return (
    <MainLayout>
      <Header />
      <Router>
        <Routes>
          <Route path='/' element={<LoginPage/>}  />
          {/* {
            authLogin?.data?.redult?.accessToken && <Route path='/products' element={<ProductInfo/>} />
          } */}
          <Route path='/products' element={<ProductInfo/>} />
        </Routes>
      </Router>
    </MainLayout>
  )
}

export default App;
