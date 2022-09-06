//uso de css
import './App.css'
//uso de scss
import './scss/app.scss'

import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import {Route, Routes} from "react-router-dom";
import NavBar from './components/Navbar';

function App() {
  return (
    <>
    <NavBar />
      <main>
      {/* Route Components */}
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
    </main>
    </>
  );
}

export default App;