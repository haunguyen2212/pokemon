import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/Home';
import CollectionPage from './pages/Collection';
import GamePage from './pages/Game';
import QuizPage from './pages/Quiz';
import PostPage from './pages/Post/Post';
import LinkPage from './pages/Link';
import ContactPage from './pages/Contact';
import PostDetail from './pages/Post/Detail';
import PokemonCreate from './pages/Management/Pokemon/Create';

function App() {

  return (
    <>
      <Header />
      <div className='content'>
        <Routes>
          <Route path='/pokemon' element={<HomePage />} />
          <Route path='/collection' element={<CollectionPage />} />
          <Route path='/game' element={<GamePage />} />
          <Route path='/quiz' element={<QuizPage />} />
          <Route path='/post' element={<PostPage />} />
          <Route path='/link' element={<LinkPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/post/:id' element={<PostDetail />} />
          <Route path='/management/pokemon/create' element={<PokemonCreate />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
