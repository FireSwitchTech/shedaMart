import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Nav from './components/Navbar'
import Landing from './pages/Landing'
import SellerPage from './pages/SellerPage'
function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <Switch>
        <Route exact path="/" component={Landing}/>
        <Route exact path="/seller/dashboard" component={SellerPage}/>
      </Switch> 
    </BrowserRouter>
  );
}

export default App;
