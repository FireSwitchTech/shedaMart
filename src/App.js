import {useEffect} from 'react'
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Nav from './components/Navbar'
import Footer from './components/Footer'
import Landing from './pages/Landing'
import Login from './pages/Login'
import SellerPage from './pages/SellerPage'
import Register from './pages/Register'
import SingleProduct from './pages/SingleProduct'
import LoggedInNav from './components/LoggedInNav'
function App() {
  let nav
    const loggedInUser = localStorage.getItem('token')
   
    if(loggedInUser){
      nav = <Nav/>
    }
    else{
      nav=<LoggedInNav/>
    }

  return (
    <BrowserRouter>
      {nav}
      <Switch>
        <Route exact path="/" component={Landing}/>
        <Route exact path="/seller/dashboard" component={SellerPage}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/product/:productId" component= {SingleProduct}/>
      </Switch> 
    </BrowserRouter>
  );
}

export default App;
