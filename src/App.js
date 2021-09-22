import React from 'react';
import { Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Welcome from './components/views/Welcome';
import './App.css';
import Login from './authorization/Login';
import SignUp from './authorization/SignUp';
import Home from './components/views/Home';

function App() {
  return (
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
    </Layout>
  );
}

export default App;
