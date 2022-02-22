import React from 'react';
import './App.css';
import {Route,Routes} from 'react-router-dom'

import HomePage from "./pages/homepage/homepage.component";
import Header from "./components/header/header.component";
import ShopPage from "./pages/shopPage/shopPage.component";
import SignInAndSignUpPage from "./pages/homepage/sign-in-and-sign-up-page/sign-in-and-sign-up.component";






function App() {
  return (
    <div >
        <Header/>
      
      <Routes>
        <Route exact path='/' element={<HomePage/>} />
        <Route exact path='/shop' element={<ShopPage/>} />
          <Route exact path='/signin' element={<SignInAndSignUpPage/>} />
      </Routes>
    

    </div>
  );
}

export default App;
