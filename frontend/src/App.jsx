 
 
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory'
 
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import LoginSign from './Pages/LoginSign'
import Shop from './Pages/shop';
import Footer from './Components/Footer/Footer';
import plant_banner from './Components/Assets/plant_banner.jpeg';
import seeds_banner from './Components/Assets/seeds_banner.jpg';
import  vagetable_banner from './Components/Assets/vegetable_banner.webp';
import Login from './Pages/Login';

function App() {
   


  return (
    
    <div>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path="/Air Purifying Plants" element={<ShopCategory banner={plant_banner}   category="Air Purifying Plants" />} />
        <Route path="/Herbs & Edibles" element={<ShopCategory banner={seeds_banner} category="Herbs & Edibles" />} />
        <Route path="/Healthy Vegetable" element={<ShopCategory  banner={vagetable_banner} category="Healthy Vegetable" />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSign />} />
        <Route path="/loggeduser" element={<Login />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </div>
       
    
  )
}

export default App
