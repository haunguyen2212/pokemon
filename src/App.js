import './App.css';
import Header from './components/Header';
import ListPokemon from './components/home/ListPokemon';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Header />
      <div style={{ margin: "80px 0 30px 0" }}>
        <ListPokemon />
      </div>
      <Footer />
    </>
  );
}

export default App;
