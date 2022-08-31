import './App.css';
import ItemListContainer from './components/ItemListContainer';
import Cards from './components/Cards';
import NavBar from './components/Navbar';
import data from './components/data'

const App = () => {
  return (
    <>
    <NavBar />
    <div className="App">
      <Cards />
    </div>
    <div className="fondo-menu col d-flex justify-content-center">
      {
        data.map(item => (
          <ItemListContainer
          img={item.img}
          carta={item.carta}
          descripción={item.descripción}
          precio={item.precio}
          />
        ))
      }
    </div>
    </>
  );
}

export default App;
