import { EventsList } from './pages/Events/EventsList';
import { NavBar } from './components/Navigation/NavBar';
import { Routes, Route } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import { AddEventForm } from './pages/Form/AddEventForm';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<EventsList />} />
        <Route path='/form' element={<AddEventForm />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
