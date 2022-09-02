import './App.css';
import Cards from './components/Cards';
import NavBar from './components/Navbar';
import data from './components/data'
import Cartas from './countainers/Cartas';

const App = () => {
  return (
    <>
    <NavBar />
    <div className="App">
      <Cards />
    </div>
    <div className="fondo-menu col d-flex justify-content-center">
    <Cartas items={data} />
    </div>
    </>
  );
}

export default App;
