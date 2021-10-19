import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Services from './components/Services/Services';
import Login from './components/Login/Login';
import Booking from './components/Booking/Booking';
import Header from './components/Shared/Header/Header';
import AuthProvider from './contexts/AuthProvider';
import Footer from './components/Shared/Footer/Footer';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
            <Switch>
              <Route exact path='/'>
                <Home></Home>
              </Route>
              <Route path='/home'>
                <Home></Home>
              </Route>
              <Route path='/services'>
                <Services></Services>
              </Route>
              <Route path='/login'>
                <Login></Login>
              </Route>
              <Route path='/booking/:serviceId'>
                <Booking></Booking>
              </Route>
            </Switch>
            <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
