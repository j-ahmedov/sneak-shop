import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Business from './components/business/Business';
import Sign_in from './components/sign_in/Sign_in';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Categories from './components/categories/Categories';
import Shop from './components/shop/Shop';
import Popup from 'reactjs-popup';
import { useState } from 'react';


function App() {

  const [isShowSignIn, setIsShowSign] = useState(false);

  const showSignIn = () => {
    setIsShowSign((isShowSignIn) => !isShowSignIn);
  }

  return (
    <Router>
      <div className="App">
        <div className="app-navbar">
          <Navbar showSignIn= { showSignIn }/>
        </div>
    <Sign_in isShowSignIn = { isShowSignIn }/>

        
        <div className="main-content">

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/shop">
              <Shop />
            </Route>
            <Route path="/categories">
              <Categories />
            </Route>
            <Route path="/business">
              <Business />
            </Route>
            
          </Switch>
        </div>

        <div className="app-footer">
          <Footer/>
        </div>
      
    </div>

    </Router>
    
  );
}

export default App;
