import React from 'react';
import './App.css';
import {Route,Routes} from 'react-router-dom'

import HomePage from "./pages/homepage/homepage.component";
import Header from "./components/header/header.component";
import ShopPage from "./pages/shopPage/shopPage.component";
import SignInAndSignUpPage from "./pages/homepage/sign-in-and-sign-up-page/sign-in-and-sign-up.component";



import {auth,createUserProfileDocument} from "./firebase/firebase.utils";


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
           
           //-------------When a user Signs in Successfully
            async userAuth =>{
                
                if (userAuth){
                    const userRef = await createUserProfileDocument(userAuth);
                    
                    userRef.onSnapshot(snapshot => {
                        console.log(snapshot);
                        this.setState({
                            currentUser:{
                                id: snapshot.id,
                                ...snapshot.data()
                            }
                        })
                    })
                }
                else{
                    //------------User has signed out
                  //  console.log(userAuth)
                    this.setState({
                        currentUser:userAuth
                    })
                }
                
                
            //    createUserProfileDocument(user);
                
                
                
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
