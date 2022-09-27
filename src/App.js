import React from 'react'

// components
import MainLayout from './Layout/MainLayout';
import Header from './components/Header/Header';

// App.css
import "./App.css";
import ProductInfo from './components/productInfo/ProductInfo';

const App = () => {
  return (
    <MainLayout>
      <Header />
      <ProductInfo/>
    </MainLayout>
  )
}

export default App;
