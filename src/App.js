import React from 'react';
import { Route } from 'react-router-dom';
import Welcome from './components/views/Welcome';
import './App.css';
import Login from './authorization/Login';
import SignUp from './authorization/SignUp';
import Product from './components/Product/Product';
import ProductDetail from './components/Product/ProductDetail';
import  {AuthProvider} from './store/AuthContext';
import CartProvider from './store/CartProvider';

function App(props) {
  return (
    <AuthProvider>
      <Route path='/' exact>
        <Welcome />
      </Route>
        
      <Route path='/login'>
        <Login  onLogin={props.onLogin} />
      </Route>
        
      <Route path='/signup'>
        <SignUp />
      </Route>
        
      <CartProvider>
        <Route path='/product' exact>
          <Product />
        </Route>

        <Route path='/product/:productId' exact>
          <ProductDetail />
        </Route>
      </CartProvider>
      
      
    </AuthProvider>
    
  );
}

export default App;
