import './App.css';
import ItemListContainer from './components/ItemListContainer';
import Cards from './components/Cards';
import NavBar from './components/Navbar';

import PcComun1 from './pc-comunes/PcComun1.jpg'
import PcComun2 from './pc-comunes/PcComun2.jpg'
import PcComun3 from './pc-comunes/PcComun3.jpg'
import PcComun4 from './pc-comunes/PcComun4.jpg'
import PcComun5 from './pc-comunes/PcComun5.jpg'

const App = () => {
  return (
    <>
    <NavBar />
    <div className="App">
      <Cards />
    </div>
    <div className="fondo-menu col d-flex justify-content-center">
    <ItemListContainer img={PcComun1} carta="pc común 1" descripción="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." precio="$89,999"/>
    <ItemListContainer img={PcComun2} carta="pc común 2" descripción="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." precio="$79,999"/>
    <ItemListContainer img={PcComun3} carta="pc común 3" descripción="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." precio="$69,999"/>
    <ItemListContainer img={PcComun4} carta="pc común 4" descripción="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." precio="$59,999"/>
    <ItemListContainer img={PcComun5} carta="pc común 5" descripción="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." precio="$99,999"/>
    </div>
    </>
  );
}

export default App;
