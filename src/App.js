import React from 'react';
import './App.css';
import {Route,Routes} from 'react-router-dom'

import HomePage from "./pages/homepage/homepage.component";
import Header from "./components/header/header.component";
import ShopPage from "./pages/shopPage/shopPage.component";
import SignInAndSignUpPage from "./pages/homepage/sign-in-and-sign-up-page/sign-in-and-sign-up.component";



import {auth} from "./firebase/firebase.utils";


class App extends React.Component{
    
    constructor() {
        super();
        this.state ={
            currentUser: null
        }
    }
    
    unsubscribeFromAuth = null;
    componentDidMount() {
       this.unsubscribeFromAuth = auth.onAuthStateChanged(
            user =>{
                this.setState({currentUser: user});
                console.log(user);
            }
        )
    }
    
    
    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div >

                <Header currentUser={this.state.currentUser}/>

                <Routes>
                    <Route exact path='/' element={<HomePage/>} />
                    <Route exact path='/shop' element={<ShopPage/>} />
                    <Route exact path='/signin' element={<SignInAndSignUpPage/>} />
                </Routes>


            </div>
        );
    }

    
}

export default App;
