import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Reserve from './pages/Reserve';
import MyReservations from './pages/MyReservations';
import Add from './pages/Add';
import Delete from './pages/Delete';

function App() {
  return (
    <BrowserRouter>
      <div className="AppContainer">
        <Navbar />
        <div className="RoutesContainer">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reserve" element={<Reserve />} />
            <Route path="/myreservations" element={<MyReservations />} />
            <Route path="/add" element={<Add />} />
            <Route path="/delete" element={<Delete />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
