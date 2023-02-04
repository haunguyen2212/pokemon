import './App.css';
import Header from './components/Header';
import ListPokemon from './components/home/ListPokemon';

function App() {

  return (
    <>
      <Header />
      <div style={{ marginTop: "80px" }}></div>
      <ListPokemon />
    </>
  );
}

export default App;
