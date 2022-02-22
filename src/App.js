import logo from './logo.svg';
import './App.css';
import {Route,Routes} from 'react-router-dom'

import HomePage from "./pages/homepage/homepage.component";
import Header from "./components/header/header.component";
import ShopPage from "./pages/shopPage/shopPage.component";
const Test = () =>(<div>Hello Test</div>);




function App() {
  return (
    <div >
        <Header/>
      
      <Routes>
        <Route exact path='/' element={<HomePage/>} />
        <Route exact path='/shop' element={<ShopPage/>} />
      </Routes>
    

    </div>
  );
}

export default App;
