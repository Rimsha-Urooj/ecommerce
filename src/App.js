import React from 'react';
import { Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Welcome from './components/views/Welcome';
import './App.css';
import Login from './authorization/Login';
import SignUp from './authorization/SignUp';
import Home from './components/views/Home';
import Product from './components/Product/Product';
import ProductDetail from './components/Product/ProductDetail';

function App() {
  return (
    <React.Fragment>
      <Layout>
        <Route path='/' exact>
        <Welcome />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/signup'>
          <SignUp />
        </Route>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/product' exact>
          <Product />
        </Route>
        <Route path='/product/:productId' exact>
          <ProductDetail />
        </Route>
      </Layout>
      
    </React.Fragment>
    
  );
}

export default App;
