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
import Add from './pages/Add/Add';
import Delete from './pages/Delete/Delete';
import DetailsPage from './pages/DetailsPage/DetailsPage';
import Add2 from './pages/Add2/Add2';
import Add3 from './pages/Add3/Add3';

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
            <Route path="/add2" element={<Add2 />} />
            <Route path="/add3" element={<Add3 />} />
            <Route path="/delete" element={<Delete />} />

            <Route path="/detailspage/:id" element={<DetailsPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
