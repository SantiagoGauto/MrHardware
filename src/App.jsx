//uso de css
import './App.css'
//uso de scss
import './scss/app.scss'

import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { Route, Routes } from "react-router-dom";
import NavBar from './components/Navbar';
import Cart from './components/Cart';
import CartContextProvider from './components/CartContext';

function App() {
  return (
    <>
    <CartContextProvider>
    <NavBar />
    <main>
      {/* Route Components */}
      <Routes>
        {/* ItemListContainer */}
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        {/* ItemDetailContainer */}
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        {/* Cart */}
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </main>
    </CartContextProvider>
    </>
  );
}

export default App;