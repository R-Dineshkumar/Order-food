import './App.css';
import SignUp from './Components/Signup';
import { Route,Routes } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/login';
import RestaurantDetails from './Components/Restaurantpage';
import { CartProvider } from './Components/cartcontext';
import Cart from './Components/cart';
import OrderPlaced from './Components/orderplaced';

function App() {
  return (
    <>
    <CartProvider>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/restaurant/:id' element={<RestaurantDetails/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/cart/order' element={<OrderPlaced/>}/>
      </Routes>
    </CartProvider>
    </>
    
    
  );
}

export default App;
