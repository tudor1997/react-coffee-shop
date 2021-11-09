
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


// pages
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Error from './pages/Error';
import Checkout from './pages/Checkout';
import ProductDetails from './pages/ProductDetails';
import Login from './pages/Login';

// components
import Header from './components/Header';
import Footer from './components/Footer';
import Alert from './components/Alert';
import PrivateRoute from './components/PrivateRoute';
import ScrollButton from './components/ScrollButton';

function App() {
  return (
 <Router>
   <Header/>
   <Alert />
   <ScrollButton />
   <Switch>
     <Route exact path="/">
       <Home/>
     </Route>
     <Route path="/about">
       <About/>
     </Route>
     <Route exact path="/products">
       <Products/>
     </Route>
     <Route path="/Contact">
        <Contact/>
      </Route>
     <Route path="/cart">
        <Cart/>
     </Route>
     <PrivateRoute path="/checkout">
      <Checkout/>
     </PrivateRoute>
     <Route path="/login">
      <Login/>
     </Route>
     <Route path="/products/:id" children={<ProductDetails></ProductDetails>} >
       </Route>

     <Route path="*">
        <Error/>
     </Route>
   </Switch>
   <Footer/>
 </Router>
  );
}

export default App;
