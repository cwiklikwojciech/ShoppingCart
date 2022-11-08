import { Routes, Route } from "react-router-dom";
import { Container } from 'react-bootstrap';
import {ShoppingCardProvider} from "./context/ShoppingCardContext"

import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";
import { Navbar } from './components/Navbar';
import Cart from "./pages/Cart";
import { InfoBar } from "./components/InfoBar";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <ShoppingCardProvider>
    <InfoBar/>  
    <Navbar />
    <Container className="mb-4">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/store' element={<Store/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/Cart' element={<Cart/>} />
          <Route path='/ProductPage' element={<ProductPage />} />
        </Routes>
    </Container>
   </ShoppingCardProvider>
  )
}

export default App
