import './App.css';
import { EventsList } from './components/EventsList';
import { Event } from './components/Event';
import { NavBar } from './components/Navigation/NavBar';
import Button from '@mui/material/Button';
import { Routes, Route, Link } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className='App'>
      <Link to='/'>Home</Link>

      <Button>
        <Link to='/Event'>Home</Link>
      </Button>
      <div>opisysdaada </div>
      {/* nav */}
      <NavBar />
      <Routes>
        <Route path='/' element={<EventsList />}></Route>
        <Route path='/Event' element={<Event />}></Route>
      </Routes>
      {/* footer */}
      <Footer />
    </div>
  );
}

export default App;
